import asyncio
import re
import time
import uuid
from unit.base import Base
from unit import logger, loop, user_db
from unit.enc import sign
from xiaohongshu.comment import XHS_comment
from xiaohongshu.xhs import XHS
from xiaohongshu.login import XHS_login
import asyncio


class APP(Base):
    def __init__(self, node_id, keyword=None):
        super().__init__()
        self.node_id = node_id
        self.keyword = keyword

    async def run(self):
        yield self.comment_task()

    async def comment_task(self):
        # data = await user_db.get_one(keyword='红包封面')

        tasks = []
        # for i in data:
        #     note_id = i[0]
        #     keyword = i[1]
        #     x = XHS(node_id=note_id, keyword=keyword)
        #     tasks.append(x.run())
        x = XHS(node_id=self.node_id, keyword=self.keyword)
        tasks.append(x.run())
        # result = x.run()
        # tasks.append(result)
        yield asyncio.gather(*tasks)
