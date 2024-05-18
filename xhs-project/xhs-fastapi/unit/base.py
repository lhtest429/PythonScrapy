import hashlib
import random
import ssl
from traceback import format_exc
import re
import time
from urllib import parse
import asyncio
import httpx
import json
from unit.enc import sign
from . import logger, proxy_pool
import setting

last_time = 0


class UnauthorizedExp(Exception):
    pass
class Base:
    def __init__(self, session=None):
        self.ip_prot = ''
        self.session: httpx.AsyncClient = session
        self.req_num = 0
        self.warring_time = time.time()
        self._sem = asyncio.Semaphore(1)
        self.base_url = 'https://edith.xiaohongshu.com'
        self.b1 = 'I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJedfMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR1QL+5Ii6sdnoeSfqYHqwl2qt5BfqJIvFbNLQ+ZPw7Ixdsxuwr4qtkIkrwIi/skZc3ICLdI3Oe0utl2ADZsL5eDSJsSPwXIEvsiVtJOPw8BuwfPpdeTDWOIx4VIiu6ZPwbJqt0IxHyoMAeVutWIvvs1utbIiMzIih2sf6sS7h5rUOsfut4sM5eWz4VLoJeSWuGIvOsYPtcIioefqtAbLijPdpsI3deiqt3pW7e1g+2IhQzIET2QgqiI3k8qI88IizuBVwUIvGF4e6edb5ekVtCIxAsfe3s0duZIh5e3DhSPqwDIkOs3BJs6Sesiqw/rd/eDuwjICFGzAoe0qwlzgKs0PwgIv8aI3T5rqwGmutec9T/803eiA7ekuwPIEOsWj/eTDRD'

    async def refresh_session(self, proxies=setting.USE_PROXY):
        default_headers = {
            'content-type': 'application/json;charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',

        }
        cookies = {
            'abRequestId': '7aed06cd-f1e6-589e-8538-fac2cc0db5e0; webBuild=4.2.5',
            'xsecappid': 'xiaohongshu-pc-web',
            'a1': '18dee8fa94czlvfbvlge3vy81k1jebxayoflor13450000388266',
            'webId': '00a9b6737210be17f335f253aef8f622',
            'websectiga': '10f9a40ba454a07755a08f27ef8194c53637eba4551cf9751c009d9afb564467',
            # 'web_session': '040069b4dd776f707557b3b598374be75222ae',
            'web_session': '040069b4aa9e530e0a185495eb374bf81a813e',
            'gid': 'yYfJDjiidSf8yYfyDS2JWk90D2WFI0Y47l0VEM07qF8FSk28Chlklv8884JWJqq8KJW48W0d',
            'webBuild': '4.0.6',
            'acw_tc': 'd38e9ec31d1679a0885dc1f71d4dbcb3a93b6d97186f7840761a65cc10e8c4c3',
            'unread': '{^%^22ub^%^22:^%^22658ea357000000001d0156c2^%^22^%^2C^%^22ue^%^22:^%^22658c0cd8000000000f012d00^%^22^%^2C^%^22uc^%^22:22}',
        }
        if proxies:
            proxies = {'https://': "http://58.220.27.135:50419", 'http://': 'http://58.220.27.135:50419'}
            logger.debug(proxies)
        else:
            proxies = None
        new_session = httpx.AsyncClient(headers=default_headers, timeout=15, cookies=cookies, proxies=proxies)
        # new_session = httpx.AsyncClient(headers=default_headers, timeout=12,
        #                             proxies={'https://': 'http://t19571912596860:tk90cdix@m798.kdltps.com:15818'})

        return new_session

    async def _pre_headers(self, url: str, data=None):
        self.session.headers.update(
            sign(
                url,
                data,
                a1=self.session.cookies.get("a1"),
                b1=self.b1,
                web_session=self.session.cookies.get("web_session"),
            )
        )

    async def fetch(self, url: str, debug_resp=True, **kwargs) -> httpx.Response:

        if not self.session:
            self.session = await self.refresh_session()
        if kwargs.get('data') or kwargs.get('json'):
            data = kwargs.get('data') or kwargs.get('json')
            await self._pre_headers(url, data)
            json_str = json.dumps(data, separators=(",", ":"), ensure_ascii=False)
            # kwargs['data'] = {}
            kwargs['data'] = json_str
            kwargs.setdefault('method', 'POST')
        else:
            params = kwargs.get('params')
            final_uri = ''
            if isinstance(params, dict):
                final_uri = f"{url}?" f"{'&'.join([f'{k}={v}' for k, v in params.items()])}"
            await self._pre_headers(final_uri)
            kwargs.setdefault('method', 'GET')
        resp = None
        kwargs['url'] = self.base_url + url
        for attempt in range(setting.MAX_RETRY):
            try:
                # await asyncio.sleep(0.5)
                resp = await self.session.request(**kwargs)
                # logger.trace(f"{url} {resp.status_code} {kwargs}")
                logger.trace(f"{url} {resp.status_code} ")
                try:
                    if str(resp.json()).find("请求频繁") > -1:
                        logger.warning(f"{url} 请求频繁")
                        raise Exception(f"{url} 请求频繁")
                except json.JSONDecodeError:
                    pass
                if resp.status_code == 404:
                    raise Exception(f'error status_code {resp.status_code}')
                elif resp.status_code == 401:
                    raise UnauthorizedExp('未认证，被顶？')
                elif resp.status_code == 503:
                    raise httpx.ProxyError('代理不可用')
                break

            except UnauthorizedExp as e:
                raise UnauthorizedExp('未认证，被顶？')
            except (httpx.TimeoutException, httpx.ProxyError, KeyError) as e:
                if setting.USE_PROXY and attempt > 0:
                    # self.delete_proxy(ip_prot)
                    logger.warning(e)
                    self.session = await self.refresh_session()
            except (httpx.HTTPError, httpx.ProxyError, ssl.SSLError) as e:
                if setting.USE_PROXY and attempt > 0:
                    logger.warning(e)
                    self.session = await self.refresh_session()
            except Exception:
                if attempt > 0:
                    logger.warning(format_exc(limit=5))
        return resp
