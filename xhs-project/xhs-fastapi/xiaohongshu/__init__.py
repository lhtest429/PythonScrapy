import time
import random
from enum import Enum
from datetime import datetime, timezone, timedelta
from xiaohongshu import rdb


class SearchNoteType(Enum):
    """search note type"""

    # default
    ALL = 0
    # only video
    VIDEO = 1
    # only image
    IMAGE = 2


class SearchSortType(Enum):
    """serach sort type"""

    # default
    GENERAL = "general"
    # most popular
    MOST_POPULAR = "popularity_descending"
    # Latest
    LATEST = "time_descending"


def get_search_id():
    e = int(time.time() * 1000) << 64
    t = int(random.uniform(0, 2147483646))
    return base36encode((e + t))


def base36encode(number, alphabet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'):
    """Converts an integer to a base36 string."""
    if not isinstance(number, int):
        raise TypeError('number must be an integer')

    base36 = ''
    sign = ''

    if number < 0:
        sign = '-'
        number = -number

    if 0 <= number < len(alphabet):
        return sign + alphabet[number]

    while number != 0:
        number, i = divmod(number, len(alphabet))
        base36 = alphabet[i] + base36

    return sign + base36


redis_db = rdb.AsyncRedisClient()
