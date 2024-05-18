from datetime import timedelta, datetime

from fastapi import HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt

# Secret key to sign JWT tokens
SECRET_KEY = "nsxrZDqAqcjZxJdzfB7WIBK-iVk8gnjxezc6QrFPzWI"
ALGORITHM = "HS256"
# OAuth2PasswordBearer token for authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

DEFAULT_EXPIRES_DELTA = timedelta(days=30)


def create_jwt_token(data: dict, expires_delta: timedelta = DEFAULT_EXPIRES_DELTA):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_jwt_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authorization": "Bearer"},
        )
