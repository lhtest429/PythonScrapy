import random
import time

import hashlib


class Secret:

    # MD5加密
    def md5_encode(self, text):
        md5 = hashlib.md5()
        md5.update(text.encode('utf-8'))
        return md5.hexdigest()

    def c(self):
        e = 'GET'
        _ = 40011
        t = None
        n = 1
        a = num = random.randint(1, 10)
        o = int(time.time() * 1000)
        d = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        c = f'method={e}&timeStamp={o}&User-Agent={d}&index={a}&channelId=40011&sVersion=1'
        f = '&key=A013F70DB97834C0A5492378BD76C53A'
        return {'timeStamp': o,
                'index': a,
                'signKey': self.md5_encode(c + f),
                'channelId': _,
                'sVersion': n,
                'webdriver': False}