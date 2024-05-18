import json

import asyncio

from jose import JWTError
from starlette.responses import StreamingResponse, HTMLResponse
from starlette.websockets import WebSocketDisconnect

from backend.utils.log import log, Loggers
from datetime import datetime
from typing import List
from fastapi import FastAPI, Body, Query, Form, Depends, WebSocket, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import desc

import backend.utils.token as token_util
from sql_app.databases import SessionLocal
from sqlalchemy.orm import Session
from sql_app.models import User, Comment, Notes

import main
from xiaohongshu.comment import XHS_comment
from loguru import logger
from xiaohongshu.xhs import XHS
from xiaohongshu.login import XHS_login

app = FastAPI()
# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 设置允许的源，可以根据需求进行配置
    allow_credentials=True,
    allow_methods=["*"],  # 设置允许的 HTTP 方法，可以根据需求进行配置
    allow_headers=["*"],  # 设置允许的 HTTP 头，可以根据需求进行配置
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class QueryIn(BaseModel):
    url: str
    keyword: str


class Login(BaseModel):
    username: str
    password: str


# 返回的评论数据
class CommentOut(BaseModel):
    id: int
    keyword: str
    user_id: str
    comment_id: str
    user_nick: str
    ip: str
    comment_desc: str
    time: datetime

    class Config:
        json_encoders = {
            datetime: lambda v: v.strftime("%Y-%m-%d %H:%M:%S")
        }


# 返回的视频信息
class NotesOut(BaseModel):
    id: int
    note_id: str
    title: str
    desc: str
    type: str
    user: dict
    img_urls: List[dict]
    video_url: str
    tag_list: List[dict]
    at_user_list: List[dict]
    collected_count: int
    comment_count: int
    comment_list: str
    liked_count: int
    share_count: int
    time: datetime
    last_update_time: datetime
    keyword: str

    class Config:
        json_encoders = {
            datetime: lambda v: v.strftime("%Y-%m-%d %H:%M:%S")
        }


# username: str = Query(...) /api/start?username=,


@app.post('/api/login')
def login(query: Login = Body(...), db: Session = Depends(get_db)):
    users = db.query(User).filter(User.username == query.username, User.password == query.password).first()
    if users:
        token_data = {'sub': query.username}
        token = token_util.create_jwt_token(token_data)
        return {"status": 200, "msg": "successfully!!!", 'token': token, 'token_type': 'Bearer'}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authentication": "Bearer"},
        )


@app.post('/api/keyword', response_model=List[NotesOut])
async def xhs_search(query: QueryIn = Body(...), db: Session = Depends(get_db)):
    from xiaohongshu.xhs import XHS
    x = XHS(node_id='', keyword=query.keyword)
    await x.run()
    note_id = query.url.split('/')[-1]
    # async for i in res:
    #     log.info(i)
    #     async for y in i:
    #         log.info(y)
    # log.info(rr)
    # res = db.query(Notes).order_by(desc(Notes.time)).first()
    # log.info(xx)
    # for i in res:
    #     log.info(type(i.tag_list))
    #     # str_json = json.loads(i.tag_list)
    #     # for y in str_json:
    #     #     log.info(y)
    #     #     log.info(type(y))
    # return res
    pass


@app.post('/api/comment', response_model=List[CommentOut])
async def xhs_comment(query: QueryIn = Body(...), db: Session = Depends(get_db)):
    note_id = query.url.split('/')[-1]
    main.run(note_id, '')
    comment = XHS_comment(note_id=note_id)
    result = comment.run()
    async for i in result:
        async for y in i:
            async for z in y:
                log.info(z)
    return None
    # res = db.query(Comment).order_by(desc(Comment.time)).all()
    # return res


# 测试
async def stream_data(websocket: WebSocket):
    for i in range(10):
        await asyncio.sleep(1)
        await websocket.send_text(f'Data{i}')


@app.websocket("/ws/keyword")
async def websocket_search(websocket: WebSocket):
    await websocket.accept()
    try:
        query = await websocket.receive_json()
        token = query['token']
        # log.info(token)
        try:
            payload = token_util.decode_jwt_token(token)
        except JWTError as e:
            await websocket.send_json('Invalid credentials')
            return
        x = XHS(node_id='', keyword=query['keyword'])
        res = x.run()
        async for i in res:
            async for y in i:
                log.info(y)
                await websocket.send_json(y)
    except WebSocketDisconnect:
        # 处理连接断开的情况
        logger.info("WebSocket Connection Closed")
    finally:
        await asyncio.sleep(5)  # 等待5秒
        await websocket.send_json("No Infos")
        await websocket.close()


@app.websocket("/ws/comment")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        query = await websocket.receive_json()
        token = query['token']
        try:
            payload = token_util.decode_jwt_token(token)
        except JWTError as e:
            await websocket.send_json('Invalid credentials')
            return
        note_id = query['url'].split('/')[-1]
        # log.info(note_id)
        comment = XHS_comment(note_id=note_id)
        result = comment.run()
        async for x in result:
            async for y in x:
                async for z in y:
                    log.info(z)
                    await websocket.send_json(z)
    except WebSocketDisconnect:
        # 处理连接断开的情况
        logger.info("WebSocket Connection Closed")
    finally:
        await asyncio.sleep(5)  # 等待5秒
        await websocket.send_json("No Infos")
        await websocket.close()


# 关注用户
@app.get('/api/user/follow')
async def user_follow_by_id(user_id: str = Query(...), token: str = Depends(token_util.oauth2_scheme)):
    # 在这里调用 decode_jwt_token 进行 Token 的验证
    payload = token_util.decode_jwt_token(token)
    x = XHS(node_id='', keyword='')
    res = await x.follow_user(user_id)
    log.info(res)
    return res


# 视频点赞
@app.get('/api/note/like')
async def note_like_by_id(note_id: str = Query(...), token: str = Depends(token_util.oauth2_scheme)):
    # 在这里调用 decode_jwt_token 进行 Token 的验证
    payload = token_util.decode_jwt_token(token)
    x = XHS(node_id='', keyword='')
    res = await x.like_node(note_id)
    # log.info(res)
    return res


# 点赞评论
@app.get('/api/comment/like')
async def comment_like_by_id(comment_id: str = Query(...), note_id: str = Query(...),
                             token: str = Depends(token_util.oauth2_scheme)):
    # 在这里调用 decode_jwt_token 进行 Token 的验证
    payload = token_util.decode_jwt_token(token)
    x = XHS('', '')
    res = await x.like_comment(comment_id, note_id)
    return res


# 发送验证码的接口
@app.get('/api/xhs/send_code')
async def send_code_by_phone(phone: str = Query(...), token: str = Depends(token_util.oauth2_scheme)):
    x = XHS_login()
    res = await x.send_code(phone)
    return res


@app.get('/api/xhs/login')
async def xhs_login_by_token_phone(phone: str = Query(...), code: str = Query(...),
                                   token: str = Depends(token_util.oauth2_scheme)):
    x = XHS_login()
    mobile_token = await x.check_code(phone, code)
    log.info(mobile_token.json())
    if mobile_token[1] != 'ok':
        return mobile_token
    res = x.login_code(phone, mobile_token)
    log.info(res)
    return res


if __name__ == '__main__':
    import uvicorn

    config = uvicorn.Config("apis:app", host='127.0.0.1', port=8000, reload=True)
    server = uvicorn.Server(config)
    # 将uvicorn输出的全部让loguru管理
    Loggers.init_config()
    server.run()
