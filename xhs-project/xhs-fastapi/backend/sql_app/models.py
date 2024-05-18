import json

from sqlalchemy import Column, Integer, String,JSON
from .databases import Base
from dataclasses import dataclass


# 定义 User 类
@dataclass
class User(Base):
    __tablename__ = 'user'
    id: int = Column(Integer, primary_key=True, index=True)
    username: str = Column(String(128))
    password: str = Column(String(256))


# 定义评论表
@dataclass
class Comment(Base):
    __tablename__ = 'comment'
    id: int = Column(Integer, primary_key=True, index=True)
    keyword: str = Column(String)
    user_id: str = Column(String)
    comment_id: str = Column(String)
    user_nick: str = Column(String)
    ip: str = Column(String)
    comment_desc: str = Column(String)
    time: str = Column(String)


# note表
@dataclass
class Notes(Base):
    __tablename__ = 'notes'
    id: int = Column(Integer, primary_key=True)
    note_id: str = Column(String)
    title: str = Column(String)
    desc: str = Column(String)
    type: str = Column(String)
    user: json = Column(JSON)
    img_urls: json = Column(JSON)
    video_url: str = Column(String)
    tag_list: json = Column(JSON)
    at_user_list: json = Column(JSON)
    collected_count: int = Column(Integer)
    comment_count: int = Column(Integer)
    comment_list: str = Column(String)
    liked_count: int = Column(Integer)
    share_count: int = Column(Integer)
    time: str = Column(String)
    last_update_time: str = Column(String)
    keyword: str = Column(String)
