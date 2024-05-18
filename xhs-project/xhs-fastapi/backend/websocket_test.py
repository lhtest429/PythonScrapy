from datetime import datetime
from typing import List, Dict

import asyncio
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import HTMLResponse
from starlette.staticfiles import StaticFiles
import codecs
from fastapi import FastAPI, Body, Query, Form, Depends, WebSocket
from starlette.websockets import WebSocketDisconnect
from loguru import logger

# 设置 Loguru 的配置
# 配置 loguru
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 设置允许的源，可以根据需求进行配置
    allow_credentials=True,
    allow_methods=["*"],  # 设置允许的 HTTP 方法，可以根据需求进行配置
    allow_headers=["*"],  # 设置允许的 HTTP 头，可以根据需求进行配置
)
# 将前端静态文件目录挂载到 /static 路径
app.mount("/template", StaticFiles(directory="template"), name="static")


# 返回前端页面
@app.get("/", response_class=HTMLResponse)
def read_root():
    with codecs.open("template/index.html", "r", "utf-8") as file:
        content = file.read()
    return HTMLResponse(content=content)


class ConnectionManager:
    def __init__(self):
        # 存放激活的链接
        self.active_connections: List[Dict[str, WebSocket]] = []
        # 存放最近的50条消息
        self.recent_messages: List[Dict[str, str]] = []

    async def connect(self, user: str, ws: WebSocket):
        # 链接
        await ws.accept()
        self.active_connections.append({"user": user, "ws": ws})

    def disconnect(self, user: str, ws: WebSocket):
        # 关闭时 移除ws对象
        self.active_connections.remove({"user": user, "ws": ws})

    def add_recent_message(self, user: str, message: str, timestamp: str):
        # 添加最近的消息
        formatted_message = {"user": user, "message": message, "timestamp": timestamp}
        self.recent_messages.append(formatted_message)
        # 保持最近50条消息
        if len(self.recent_messages) > 50:
            self.recent_messages = self.recent_messages[-50:]

    # 静态方法
    @staticmethod
    async def send_personal_message(message: dict, ws: WebSocket):
        # 发送个人消息
        await ws.send_json(message)

    async def send_other_message(self, message: dict, user: str):
        # 发送个人消息
        for connection in self.active_connections:
            if connection["user"] == user:
                await connection['ws'].send_json(message)

    async def broadcast(self, data: dict):
        # 广播消息
        for connection in self.active_connections:
            await connection['ws'].send_json(data)

    # 定时发送,3秒
    @staticmethod
    async def send_periodic_message(ws: WebSocket):
        while True:
            await asyncio.sleep(3)
            current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            await ws.send_json({"text": "This is a periodic message. Current ", "time": f"{current_time}"})

    async def process_message(self, user: str, message: str):
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        formatted_message = {"user": user, "message": message, "timestamp": current_time}
        self.add_recent_message(user, message, current_time)
        await self.broadcast(formatted_message)


manager = ConnectionManager()


@app.websocket("/ws/{user}")
async def websocket_endpoint(ws: WebSocket, user: str):
    await manager.connect(user, ws)
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    await manager.broadcast({"user": user, "message": "进入聊天", " ": current_time})
    try:
        while True:
            # await manager.send_periodic_message(ws)
            # 接收到的消息
            data = await ws.receive_json()
            print(data, type(data))

            send_user = data.get("send_user")
            if send_user:
                await manager.send_personal_message(data, ws)
                await manager.send_other_message(data, send_user)
            else:
                await manager.process_message(user, data['message'])

    except WebSocketDisconnect:
        manager.disconnect(user, ws)
        await manager.broadcast({"user": user, "message": "离开"})

# @app.get('/get')
# async def read():
#     async def stream_data():
#         for i in range(10):
#             await asyncio.sleep(1)
#             yield f'data: Data{i}\n\n'  # 每条数据行以 data: 开头，以两个换行符 \n\n 结尾
#
#     return StreamingResponse(stream_data(), media_type="text/event-stream")

if __name__ == '__main__':
    from backend.utils.log import log, Loggers
    import uvicorn

    config = uvicorn.Config("websocket_test:app", host='127.0.0.1', port=8010, reload=True)
    server = uvicorn.Server(config)
    # 将uvicorn输出的全部让loguru管理
    Loggers.init_config()
    server.run()

    # run('websocket_test:app', host='127.0.0.1', port=8010, reload=True)
