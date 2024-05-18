# encoding :utf8
import sys
import asyncio
from datetime import datetime, timezone, timedelta

loop = asyncio.new_event_loop()
# loop = asyncio.get_event_loop()

from loguru import logger

import setting
from . import db

sem = asyncio.Semaphore(2)

logger.remove()
logger.add(sys.stdout, level=setting.LOG_LEVEL)
logger.add('log/log_{time}.log', level=setting.LOG_FILE_LEVEL, retention=3,
           encoding='utf8')

logger.add('log/err_{time}.log', level='ERROR', encoding='utf8', retention=3)
user_db = db.AioUserDb()


def time_to_data(timestamp):
    dt_object_utc = datetime.utcfromtimestamp(timestamp)
    beijing_timezone = timezone(timedelta(hours=8))
    dt_object_beijing = dt_object_utc.replace(tzinfo=timezone.utc).astimezone(beijing_timezone)

    formatted_date = dt_object_beijing.strftime('%Y-%m-%d %H:%M:%S')
    return formatted_date
