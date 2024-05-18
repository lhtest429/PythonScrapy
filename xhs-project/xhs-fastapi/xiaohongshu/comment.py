from unit.base import Base
from unit import logger, time_to_data

import asyncio
from xiaohongshu.note import NoteComment, Note
import pytz
import json


class XHS_comment(Base):

    # def __init__(self, session=None, node_self=''):
    #     super().__init__(session)
    #     self.node_self = node_self
    def __init__(self, session=None, note_id=''):
        super().__init__(session)
        self.note_id = note_id

    async def run(self):
        # 抓取一级评论
        # return await self.get_note_comments(self.node_self.note_id)
        yield self.get_note_comments(self.note_id)
        # logger.info(res)
        # async for i in res:
        #     logger.info(i)
        #     async for y in i:
        #         logger.info(y)
        # 抓取所有评论
        # return await self.get_note_all_comments(self.node_self.note_id)

    # 获取当前点击的评论信息
    async def get_comment(self, note_id: str, cursor: str = ""):
        uri = "/api/sns/web/v2/comment/page"
        params = {"note_id": note_id, "cursor": cursor}
        response = await self.fetch(uri, params=params)
        # logger.info(response.text)
        return response.json()['data']

    # 拿到所有评论信息
    async def get_note_all_comments(self, note_id: str, crawl_interval: int = 1):
        """get note all comments include sub comments

        :param crawl_interval: crawl interval for fetch
        :param note_id: note id you want to fetch
        :type note_id: str
        """
        result = []
        comments_has_more = True
        comments_cursor = ""
        while comments_has_more:
            comments_res = await self.get_comment(note_id, comments_cursor)
            comments_has_more = comments_res.get("has_more", False)  # 判断是否还有评论
            comments_cursor = comments_res.get("cursor", "")
            comments = comments_res["comments"]  # 总的评论数
            for comment in comments:
                result.append(comment)
                cur_sub_comment_count = int(comment["sub_comment_count"])  # 回复当前评论总的评论数量
                cur_sub_comments = comment["sub_comments"]  # 回复评论信息
                result.extend(cur_sub_comments)
                # 判断是否还有展开的回复评论
                sub_comments_has_more = (
                        comment["sub_comment_has_more"] and len(cur_sub_comments) < cur_sub_comment_count
                )
                sub_comment_cursor = comment["sub_comment_cursor"]  # 当前评论的游标,来找出回复的评论
                # 展开评论
                while sub_comments_has_more:
                    page_num = 30
                    # 展开的评论信息
                    sub_comments_res = await self.get_note_sub_comments(
                        note_id, comment["id"], num=page_num, cursor=sub_comment_cursor
                    )
                    sub_comments = sub_comments_res["comments"]  # 所有的二级评论
                    sub_comments_has_more = (
                            sub_comments_res["has_more"] and len(sub_comments) == page_num  # 判断是否还有继续要展开的评论
                    )
                    sub_comment_cursor = sub_comments_res["cursor"]  # 新的游标,继续去循坏拿到数据
                    # note_json = json.dumps(comment_infos.__dict__, ensure_ascii=False)
                    # logger.info(note_json)
                    # result.extend(sub_comments)
                    # time.sleep(crawl_interval)
                    # await asyncio.sleep(crawl_interval)
            # await asyncio.sleep(crawl_interval)
        return result  # 返回所有评论信息

    # 所以一级评论信息
    async def get_note_comments(self, note_id: str):
        data = []

        async def factor(resp):
            for i in resp:
                user_id = i['user_info'].get('user_id', None)  # 用户id
                nickname = i['user_info'].get('nickname', None)  # 用户昵称
                ip_location = i.get('ip_location', None)  # 获取用户地址信息
                timestamp_seconds = time_to_data(i.get('create_time', None) / 1000.0)  # 获取时间
                comment = NoteComment(self.note_id, user_id, i['id'], nickname, ip_location, i['content'],
                                      str(timestamp_seconds))

                # logger.info(comment._asdict())
                # data.append(comment._asdict())
                yield comment._asdict()
                # logger.info(
                #     f"用户ID:{user_id}\t评论ID:{i['id']}\t用户昵称:{nickname}\tIP属地:{ip_location}\t评论内容:{i['content']}\t时间:{timestamp_seconds}\t")

        comments_has_more = True
        comments_cursor = ""
        i = 1
        while comments_has_more:
            if i >= 30:
                break
            i += 1
            resp = await self.get_comment(note_id, comments_cursor)  # 拿到一级评论的数据
            if resp:
                # logger.info(resp)
                comments_has_more = resp['has_more']  # 判断是否还有更多
                comments_cursor = resp.get('cursor', '')
                yield factor(resp['comments'])  # 循环迭代一级评论,提取有用信息
            else:
                break

        # return data

    # 展开评论信息获取
    async def get_note_sub_comments(
            self, note_id: str, root_comment_id: str, num: int = 30, cursor: str = ""
    ):
        """get note sub comments

        :param note_id: note id you want to fetch
        :type note_id: str
        :param root_comment_id: parent comment id
        :type root_comment_id: str
        :param num: recommend 30, if num greater 30, it only returns 30 comments
        :type num: int
        :param cursor: last you get cursor, defaults to ""
        :type cursor: str optional
        :rtype: dict
        """
        uri = "/api/sns/web/v2/comment/sub/page"
        params = {
            "note_id": note_id,
            "root_comment_id": root_comment_id,
            "num": num,
            "cursor": cursor,
        }
        response = await self.fetch(uri, params=params)
        return response.json()['data']

    # async def comment_note(self, note_id: str, content: str):
    #     """
    #     回复帖子
    #     :rtype: dict
    #     """
    #     uri = "/api/sns/web/v1/comment/post"
    #     data = {"note_id": note_id, "content": content, "at_users": []}
    #     response = await self.fetch(uri, data=data)
    #     logger.info(response.json())

    # async def like_comment(self, note_id: str, comment_id: str):
    #     uri = "/api/sns/web/v1/comment/like"
    #     data = {"note_id": note_id, "comment_id": comment_id}
    #     response = await self.fetch(uri, data=data)
    #     logger.info(response.json())


if __name__ == '__main__':
    x = XHS_comment()
    asyncio.run(x.run())
