from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from starlette.config import Config

config = Config('/code/app/.env')

HOST = config("HOST")
DB_NAME = config("DB_NAME")
PASSWORD = config("PASSSWORD")
DB_USER = config("DB_USER")
PORT = config("PORT")
DB_URL = f"mysql+pymysql://{DB_USER}:{PASSWORD}@{HOST}:{PORT}/{DB_NAME}"

engine = create_engine(DB_URL, pool_recycle=500)
SessionLocal = sessionmaker(bind=engine)


def get_session():
  session = SessionLocal()
  try:
    yield session
  finally:
    session.close()
