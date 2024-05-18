from sqlalchemy.orm import Session
from .models import User
from databases import SessionLocal

def get_user(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

print(get_user(Session, 'xa'))

# 提交更改，只有执行commit()操作才会真正把数据添加到数据库中
# db.commit()
# 刷新数据库连接
# db.refresh(db_user)

# Dependency API中使用 from sql_app.database import SessionLocal
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# 可以理解为依赖注入
# @app.post("/users/", response_model=schemas.User)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
#     return crud.create_user(db=db, user=user)
