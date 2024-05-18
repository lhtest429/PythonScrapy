import aioredis
import json
from unit import logger, user_db


class AsyncRedisClient:
    def __init__(self, host='localhost', port=6379, password=''):
        self.redis = None
        self.host = host
        self.port = port
        self.password = password

    async def connect(self):
        # redis_url = f'redis://:{self.password}@{self.host}:{self.port}/0'
        redis_url = f'redis://{self.host}:{self.port}/0'
        self.redis = await aioredis.from_url(redis_url)

    async def disconnect(self):
        if self.redis:
            self.redis.close()
            await self.redis.wait_closed()

    # 存视频信息到redis
    async def save_node_to_redis(self, note):
        note_json = json.dumps(note._asdict(), ensure_ascii=False)
        hash_key = f'note:{note.note_id}'
        old_json_info = await self._save_to_hash(hash_key, 'value', note_json)
        if old_json_info:
            logger.info('更新数据')
            await user_db.update_node_infos(note._asdict())
            await self.redis.hset(hash_key, 'value', note_json)
            if '评论' in old_json_info:
                return True

    # 存评论信息到redis
    async def save_comment_to_redis(self, note, keyword):
        # 直接插入数据库
        for item in note:
            await user_db.insert_comment_infos(item, keyword)
        new_value = json.dumps(note, ensure_ascii=False)
        hash_key = f"comment:{note[0]['note_id']}"
        current_value_obj = await self._save_to_hash(hash_key, 'value', new_value)
        if current_value_obj:
            logger.info('更新数据')
            await self.redis.hset(hash_key, 'value', new_value)
            different_data = await self.get_different(current_value_obj, json.loads(new_value))
            if different_data:
                await self.redis.hset(hash_key, 'dif', different_data)
                for i in json.loads(different_data):
                    logger.info(f"不同的数据{i} 开始存入数据库")
                    await user_db.insert_comment_infos(i, keyword)

    # 再存之前进行数据查询
    async def _save_to_hash(self, hash_key, field, value):
        if not self.redis:
            await self.connect()

        current_value = await self.redis.hget(hash_key, field)

        if current_value:
            current_value_obj = json.loads(current_value)
            new_value_obj = json.loads(value)

            if current_value_obj != new_value_obj:
                if 'note' in hash_key:
                    logger.info("笔记信息比较之前有不同")
                    comment_count = new_value_obj['comment_count']  # 评论信息总数
                    current_value_count = current_value_obj['comment_count']
                    if int(comment_count) > int(current_value_count):
                        logger.info('评论信息有更新')
                        return '评论信息有更新'
                    else:
                        return '笔记信息已经更新'

                if 'comment' in hash_key:
                    logger.info('评论信息比较之前 有不同')
                    return current_value_obj
            else:
                logger.info('没有变化')
                return ''
        logger.info('插入新的')
        await self.redis.hset(hash_key, field, value)
        return ''

    async def get_different(self, data1, data2):
        comment_ids_d = set(item["comment_id"] for item in data1)
        comment_ids_d2 = set(item["comment_id"] for item in data2)

        different_comment_ids = comment_ids_d.symmetric_difference(comment_ids_d2)
        different_comment_data = []

        for comment_id in different_comment_ids:
            different_comment_data += [item for item in data1 + data2 if item.get("comment_id") == comment_id]

        return json.dumps(different_comment_data, ensure_ascii=False)
