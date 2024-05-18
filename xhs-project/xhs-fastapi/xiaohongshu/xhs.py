from unit import logger, user_db, time_to_data
from unit.base import Base
import asyncio
from xiaohongshu import get_search_id, SearchSortType, SearchNoteType, redis_db
from xiaohongshu.note import Note
from xiaohongshu.comment import XHS_comment
import random


class XHS(Base):

    def __init__(self, session=None, node_id='', keyword=''):
        super().__init__(session)
        self.note_id = node_id
        self.keyword = keyword

    async def run(self):
        if self.keyword:
            # 保存视频信息到数据库
            yield self.get_note_info_by_keyword_to_mysql()
            # logger.info(res)
        if self.note_id:
            pass
            # 直接保存评论
            # return await self.note_comment_save_to_redis()
        # i = 1
        # while True:
        #     if i == 1:
        #         await self.note_info_save_to_redis()
        #         await self.note_comment_save_to_redis()
        #     else:
        #         logger.info(f'{self.note_id} 第{i}次检查')
        #         flag = await self.note_info_save_to_redis()
        #         if flag:
        #             await self.note_comment_save_to_redis()
        #
        #     await asyncio.sleep(random.randint(30, 60))
        #     i += 1

    async def get_note_info_by_keyword_to_mysql(self):
        t = []
        # 提取视频的信息
        keyword_node_infos = await self.get_note_by_keyword(self.keyword, 1)
        for i in keyword_node_infos:
            x = XHS(node_id=i['ID'], keyword=self.keyword)
            t.append(asyncio.create_task(x.note_info_save_to_mysql()))
        # await asyncio.wait(t)
        # 使用asyncio.wait等待任务完成
        completed_tasks, pending_tasks = await asyncio.wait(t)
        for task in completed_tasks:
            yield task.result()
            # res = await x.note_info_save_to_mysql()
            # logger.info(res)
            # yield res
            # async for i in res:
            #     logger.info(i)
            # infos_list.append(res)
        # print(infos_list)
        # return infos_list

    # 保存视频信息到数据库
    async def note_info_save_to_mysql(self):
        note_info = await self.get_note_info()
        return note_info._asdict()
        # await user_db.insert_node_infos(note_info._asdict(), self.keyword)

    # 保存单个视频信息到redis
    async def note_info_save_to_redis(self):
        note_info = await self.get_note_info()
        return await redis_db.save_node_to_redis(note_info)

    # 保存评论到redis
    async def note_comment_save_to_redis(self):

        comment = XHS_comment(node_self=self)
        comment_infos = await comment.run()
        # for i in comment_infos:
        #     logger.info(i)
        # 直接存数据库，没有进行检查
        # for item in comment_infos:
        #     await user_db.insert_comment_infos(item, self.keyword)
        # 如果数据有不同再存到数据库里面去
        # await redis_db.save_comment_to_redis(comment_infos, self.keyword)
        return comment_infos

    # 拿到单个视频的基础信息
    async def get_note_info(self):
        # 拿到视频标题card
        note = await self.get_note_by_id(self.note_id)
        # 拿到视频的收藏数量,评论数量,转发数量,点赞数量
        interact_info = note["interact_info"]
        note_info = Note(
            note_id=note["note_id"],  # 视频id
            title=note["title"],  # title
            desc=note["desc"],  # 视频简介
            type=note["type"],  # 类型 video/
            user=note["user"],  # 视频发布者的信息
            img_urls=[],
            video_url='',
            tag_list=note["tag_list"],  # 视频标签列表
            at_user_list=note["at_user_list"],
            collected_count=interact_info["collected_count"],  # 收藏数量
            comment_count=interact_info["comment_count"],  # 评论数量
            liked_count=interact_info["liked_count"],  # 喜欢数量
            share_count=interact_info["share_count"],  # 分享数量
            time=time_to_data(note.get('time', None) / 1000.0),  # 时间
            last_update_time=time_to_data(note.get('last_update_time', None) / 1000.0),  # 最后更新的时间
            comment_list=''
        )
        return note_info
        # await redis_db.save_node_to_redis(note_info)

    # 拿到视频信息卡片
    async def get_note_by_id(self, note_id: str):
        """
        :param note_id: note_id you want to fetch
        :type note_id: str
        :rtype: dict
        """
        data = {"source_note_id": note_id, "image_scenes": ["CRD_WM_WEBP"]}
        uri = "/api/sns/web/v1/feed"
        res = await self.fetch(uri, data=data)
        # logger.info(res.json())
        return res.json()['data']["items"][0]["note_card"]

    # 关键词搜索得到的搜索结果
    async def get_note(
            self,
            keyword: str,
            page: int = 1,
            page_size: int = 20,
            sort: SearchSortType = SearchSortType.GENERAL,
            note_type: SearchNoteType = SearchNoteType.ALL,
    ):
        uri = "/api/sns/web/v1/search/notes"
        data = {
            "keyword": keyword,
            "page": page,
            "page_size": page_size,
            "search_id": get_search_id(),  # 加密参数
            "sort": sort.value,
            "note_type": note_type.value,
        }
        response = await self.fetch(uri, data=data)
        # logger.info(response.text)
        return response.json()['data']

    # 提取视频信息
    async def get_note_by_keyword(self, keywords, num) -> list:

        t = []
        cumulative_index = 1

        for n in range(num):
            info2 = await self.get_note(keyword=keywords, page=n + 1)
            # 循环搜索到的视频列表
            for i in info2['items']:
                if i['model_type'] == 'note':  # 视频判断
                    t.append(
                        {'index': cumulative_index, 'ID': i['id'],
                         'name': i['note_card'].get('display_title', None)})  # 记录视频数量,视频id,视频标题
                    cumulative_index += 1

        return t

    # 关注用户
    async def follow_user(self, user_id: str):
        uri = "/api/sns/web/v1/user/follow"
        data = {"target_user_id": user_id}
        response = await self.fetch(uri, data=data)
        logger.info(response.json())
        return response.json()

    # 点赞视频
    async def like_node(self, node_id: str):
        api = '/api/sns/web/v1/note/like'
        json_data = {'note_oid': node_id}
        response = await self.fetch(api, data=json_data)
        return response.json()

    # 点赞评论
    async def like_comment(self, comment_id, note_id):
        api = '/api/sns/web/v1/comment/like'
        json_data = {'comment_id': comment_id, 'note_id': note_id}
        response = await self.fetch(api, data=json_data)
        return response.json()

# if __name__ == '__main__':
#     X = XHS()
#     asyncio.run(X.run())
