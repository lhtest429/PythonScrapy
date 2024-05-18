from unit.base import Base
from unit import logger


class XHS_login(Base):

    def __init__(self, session=None):
        super().__init__(session)

    async def run(self):
        pass

    async def send_code(self, phone: str, zone: str = 86):
        uri = "/api/sns/web/v1/login/send_code"
        params = {"phone": phone, "zone": zone, 'type': 'login'}
        resp = await self.fetch(uri, params=params)
        return resp

    async def check_code(self, phone: str, code: str, zone: str = 86):
        uri = "/api/sns/web/v1/login/check_code"
        params = {"phone": phone, "zone": zone, "code": code}
        resp = await self.fetch(uri, params=params)

        if resp.json()['success']:
            mobile_token = resp.json()['data']['mobile_token']
            return [mobile_token,'ok']
        return resp

    async def login_code(self, phone: str, mobile_token: str, zone: str = 86):
        uri = "/api/sns/web/v1/login/code"
        data = {"mobile_token": mobile_token, "zone": zone, "phone": phone}
        resp = await self.fetch(uri, data=data)
        return resp
