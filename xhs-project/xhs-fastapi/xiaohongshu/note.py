from typing import Any, NamedTuple
from datetime import datetime


class NoteComment(NamedTuple):
    """note typle"""
    note_id: str
    user_id: str
    comment_id: str
    user_nick: str
    ip: str
    comment_desc: dict
    time: str


class Note(NamedTuple):
    """note typle"""

    note_id: str
    title: str
    desc: str
    type: str
    user: dict
    img_urls: list
    video_url: str
    tag_list: list
    at_user_list: list
    collected_count: str
    comment_count: str
    comment_list: str
    liked_count: str
    share_count: str
    time: int
    last_update_time: int
