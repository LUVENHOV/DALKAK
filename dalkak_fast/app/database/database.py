from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

from starlette.config import Config

# config = Config('.env')

# HOST=config("HOST")
# DBNAME=config("DBNAME")
# PASSSWORD=config("PASSSWORD")
# USERNAME=config("USERNAME")
# PORT=config("PORT")

DB_URL = 'mysql+pymysql://{HOST}:{}:{}/{}'

class engineconn:
    def __init__(self):
        self.engine = create_engine(DB_URL, pool_recycle = 500)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn