from sqlalchemy import Column, Integer, String
from .databases import Base
from dataclasses import dataclass


# 定义 User 类
@dataclass
class User(Base):
    __tablename__ = 'user'
    id: int = Column(Integer, primary_key=True, index=True)
    username: str = Column(String(128))
    password: str = Column(String(256))





# class User(Base):
#     __tablename__ = 'user'  # 定义表名
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String(128))
#     password = Column(String(256))
#
#     # email = Column(String(255), unique=True, index=True)
#     # hashed_password = Column(String(255))
#     # is_active = Column(Boolean, default=True)
#     # items = relationship("Item", back_populates="owner")
#     # 关联 Item 表
#     def __repr__(self):
#         return f"<User(id={self.id}, username={self.username}, password={self.password})>"

# 定义 Item 类
# class Item(Base):
#     __tablename__ = "items"
#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String(255), index=True)
#     description = Column(String(255), index=True)
#     owner_id = Column(Integer, ForeignKey('users.id'))
#     owner = relationship("User", back_populates="items")
# 关联 User 表
