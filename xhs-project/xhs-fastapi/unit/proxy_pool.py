import time
import httpx
import asyncio
from loguru import logger
from setting import PROXY_API


class ProxyPool:
    def __init__(self):
        self.api = PROXY_API
        self.session = httpx.Client()  # 使用异步的 httpx 客户端
        self.update_time = 0
        self.proxy_time = {}

    async def pull_proxy(self):
        if time.time() - self.update_time < 10:
            await asyncio.sleep(0.5)
            return await self.pull_proxy()
        resp = self.session.get(self.api)
        logger.debug('获取代理成功' + resp.text)
        if '提取间隔' in resp.text:
            await asyncio.sleep(3)
            return await self.pull_proxy()
        new = resp.text.split()
        for ip_port in new:
            self.proxy_time[ip_port] = time.time()
        self.update_time = time.time()

    async def get_proxy(self):
        if len(self.proxy_time) == 0:
            await self.pull_proxy()
        current_time = time.time()
        for ip_port, get_time in list(self.proxy_time.items()):
            if current_time - get_time <= 4 * 60:
                del self.proxy_time[ip_port]
                return ip_port
        # 如果没有合适的代理可用，重新拉取
        await self.pull_proxy()
        return await self.get_proxy()

    async def insert_ip_port(self, ip_port):
        self.proxy_time[ip_port] = time.time()

