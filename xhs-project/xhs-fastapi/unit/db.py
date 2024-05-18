import aiomysql
import asyncio
from unit import logger, loop
from setting import AliMysql
from datetime import datetime
import json

lock = asyncio.Lock()


async def create_db_pool(setting):
    return await aiomysql.create_pool(
        host=setting.MYSQL_HOST,
        port=setting.MYSQL_PORT,
        user=setting.MYSQL_USER,
        password=setting.MYSQL_PSW,
        loop=loop,
        maxsize=10
    )


class AioBase:
    def __init__(self, setting):
        self.pool = loop.run_until_complete(create_db_pool(setting))

    async def execute(self, sql, args=None, fetchall=False):
        async with self.pool.acquire() as conn:
            async with conn.cursor() as cursor:
                try:
                    if args:
                        await cursor.execute(sql, args)
                    else:
                        await cursor.execute(sql)
                    if fetchall:
                        res = await cursor.fetchall()
                    else:
                        res = await cursor.fetchone()
                    await conn.commit()
                    return res
                except Exception as e:
                    logger.error(f"Database error: {e}")
                    await conn.rollback()
                    return None


class AioUserDb(AioBase):
    def __init__(self, platform=14):
        super().__init__(AliMysql)
        self.platform = platform

    async def get_one(self, keyword):
        sql = "SELECT `note_id`,`keyword` FROM `xhs`.`notes` where `keyword` = %s LIMIT 0,1000"
        # sql = 'SELECT * FROM `jsou`.`answers_copy1` WHERE `questionId` = %s ORDER BY `courseId` DESC LIMIT 0,1000'
        async with self.pool.acquire() as conn:
            async with conn.cursor() as cursor:
                await cursor.execute(sql, keyword)
                ans = await cursor.fetchall()
                if ans:
                    return ans
                else:
                    logger.warning('没有了')

    async def insert_node_infos(self, note_data, keyword):
        insert_query = """
            INSERT INTO `xhs`.notes
            (keyword,note_id, title, `desc`, type, user, img_urls, video_url,
            tag_list, at_user_list, collected_count, comment_count, comment_list,
            liked_count, share_count, time, last_update_time)
            VALUES
            (%s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        try:
            flattened_note_data = (
                keyword,
                note_data['note_id'], note_data['title'], note_data['desc'].encode('utf-8'),
                note_data['type'], json.dumps(note_data['user']),
                json.dumps(note_data['img_urls']), note_data['video_url'],
                json.dumps(note_data['tag_list']),
                json.dumps(note_data['at_user_list']), note_data['collected_count'],
                note_data['comment_count'], note_data['comment_list'],
                note_data['liked_count'], note_data['share_count'],
                note_data['time'], note_data['last_update_time']
            )

            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(insert_query, flattened_note_data)
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(e)

    async def update_node_infos(self, note_data):
        update_query = """
             UPDATE `xhs`.notes
             SET
                 title = %s,
                 `desc` = %s,
                 type = %s,
                 user = %s,
                 img_urls = %s,
                 video_url = %s,
                 tag_list = %s,
                 at_user_list = %s,
                 collected_count = %s,
                 comment_count = %s,
                 comment_list = %s,
                 liked_count = %s,
                 share_count = %s,
                 time = %s,
                 last_update_time = %s
             WHERE note_id = %s
         """
        try:
            flattened_note_data = (
                note_data.get('title', ''),
                note_data.get('desc', ''),
                note_data.get('type', ''),
                json.dumps(note_data.get('user', {})),
                json.dumps(note_data.get('img_urls', {})),
                note_data.get('video_url', ''),
                json.dumps(note_data.get('tag_list', [])),
                json.dumps(note_data.get('at_user_list', [])),
                note_data.get('collected_count', 0),
                note_data.get('comment_count', 0),
                note_data.get('comment_list', ''),
                note_data.get('liked_count', 0),
                note_data.get('share_count', 0),
                note_data.get('time', ''),
                datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                note_data.get('note_id', '')
            )

            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(update_query, flattened_note_data)
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(e)

    async def insert_comment_infos(self, comment_data, keyword):
        insert_query = """
               INSERT INTO `xhs`.comment
               (keyword,note_id, user_id, comment_id, user_nick, ip, comment_desc, time)
               VALUES
               (%s,%s, %s, %s, %s, %s, %s, %s)
           """
        try:
            flattened_comment_data = (
                keyword,
                comment_data['note_id'], comment_data['user_id'],
                comment_data['comment_id'], comment_data['user_nick'],
                comment_data['ip'], comment_data['comment_desc'],
                comment_data['time']
            )

            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(insert_query, flattened_comment_data)
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(e)

    async def update_course_info(self, oid, info, info1, info2, score, status):
        base_sql = 'update `jsou`.`accounts` set info=%s,infos1=%s,infos2=%s,score = %s,status = %s where id=%s'
        await self.execute(base_sql, (info, info1, info2, score, status, oid))

    async def update_by_username(self, username, status):
        sql = 'UPDATE `jsou`.`accounts` SET `status` = %s WHERE `user` = %s'
        await self.execute(sql, (status, username))

    async def crawl_update_by_username(self, id_, status, user):
        sql = 'UPDATE `jsou`.`crwal_questions` SET `status` = %s WHERE `username` = %s '
        await self.execute(sql, (status, user))


class AioAnsDb(AioBase):
    def __init__(self, platform=4):
        super().__init__(AliMysql)
        self.platform = platform
        self.q_id_ans_dic = {}

    async def select_ans_by_id(self, qid):

        sql = 'SELECT * FROM `jsou`.`answers_copy1` WHERE `questionId` = %s ORDER BY `courseId` DESC LIMIT 0,1000'
        async with self.pool.acquire() as conn:
            async with conn.cursor() as cursor:
                await cursor.execute(sql, (qid,))
                ans = await cursor.fetchall()
                if ans:
                    return ans
                else:
                    logger.warning(qid)

    async def insert_question(self, questionId, courseId, type_, title, correctAnswer, options=None):
        sql = 'INSERT INTO `jsou`.`answers_copy1` ' \
              '(`questionId`, `courseId`,`type`, `title`,`options`,`correctAnswer`) ' \
              'VALUES (%s,%s,%s,%s,%s,%s) '
        try:
            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(sql, (questionId, courseId, type_, title, options, correctAnswer))
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(e)

    async def insert_question2(self, questionId, courseId, type_, title, category, options, correctAnswer, correctReply,
                               updateTime, insertTime):
        # print(questionId, courseId, type_, title, category, options, correctAnswer, correctReply, updateTime, insertTime)
        sql = 'INSERT INTO `jsou`.`answers_copy1` ' \
              '(`questionId`, `courseId`,`type`, `title`,`category`,`options`,`correctAnswer`,`correctReply`,`updateTime`,`insertTime`) ' \
              'VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) '
        try:
            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(sql, (
                        str(questionId), str(courseId), str(type_), str(title), str(category), str(options),
                        str(correctAnswer).replace('＜multi:dc＞', '#'),
                        str(correctReply), str(updateTime),
                        str(insertTime)))
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(e)

    async def insert_need_crawl(self, data, file_count=0, simple_question_id=None):
        sql = "INSERT INTO `jsou`.`crwal_questions` (`course_id`,`question_id`, `course_version_id`, `homework_id`, `username`," \
              " `password`, `course_name`, `subject`, `type`,`status`,`file_count`,`simple_question_id`,`updata_time`) VALUES" \
              " (%s,%s, %s, %s, %s, %s, %s, %s, %s,%s,%s,%s,%s)"
        try:
            async with self.pool.acquire() as conn:
                async with conn.cursor() as cursor:
                    await cursor.execute(sql, (
                        data['course_id'], data['question_id'], data['course_version_id'], data['homework_id'],
                        data['username'], data['password'], data['course_name'], data['subject'], data['type'],
                        0, file_count, simple_question_id, datetime.now().strftime("%Y-%m-%d %H:%M:%S")), )
                    commit_ = await conn.commit()
                    return commit_
        except Exception as e:
            logger.warning(f"{data['question_id']}{e}")
            # pass
