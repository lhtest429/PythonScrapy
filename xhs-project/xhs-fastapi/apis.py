# from datetime import timedelta, datetime
# from typing import List
# from fastapi import FastAPI, Body, Query, Form, Depends
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from backend.sql_app.databases import SessionLocal
# from sqlalchemy.orm import Session
# from backend.sql_app.models import User, Comment
#
# from main import run
#
# app = FastAPI()
# # 添加 CORS 中间件
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # 设置允许的源，可以根据需求进行配置
#     allow_credentials=True,
#     allow_methods=["*"],  # 设置允许的 HTTP 方法，可以根据需求进行配置
#     allow_headers=["*"],  # 设置允许的 HTTP 头，可以根据需求进行配置
# )
#
#
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
#
#
# class QueryIn(BaseModel):
#     url: str
#     keyword: str
#
#
# class Login(BaseModel):
#     username: str
#     password: str
#
#
# # 返回的评论数据
# class CommentOut(BaseModel):
#     id: int
#     keyword: str
#     user_id: str
#     comment_id: str
#     user_nick: str
#     ip: str
#     comment_desc: str
#     time: datetime
#
#     class Config:
#         json_encoders = {
#             datetime: lambda v: v.strftime("%Y-%m-%d %H:%M:%S")
#         }
#
#
# # username: str = Query(...) /api/start?username=,
#
#
# @app.post('/api/login')
# def login(query: Login = Body(...), db: Session = Depends(get_db)):
#     users = db.query(User).filter(User.username == query.username, User.password == query.password).first()
#     print(users)
#     pass
#
#
# @app.post('/api/search', response_model=List[CommentOut])
# def xhs_search(query: QueryIn = Body(...), db: Session = Depends(get_db)):
#     res = db.query(Comment).all()
#     note_id = query.url.split('/')[-1]
#     #run(note_id, query.keyword)
#     return res
