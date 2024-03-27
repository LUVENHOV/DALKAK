from typing import Union

from fastapi import FastAPI
from recommend.recommend import recommend_by_prefer
from recommend.recommend import recommend_by_refrigerator

from database.database import engineconn

app = FastAPI()

engine = engineconn()
session = engine.sessionmaker()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/prefer-recommend/{m_id}")
async def prefer_recommend(m_id: int):
    result= recommend_by_prefer(m_id,session)
    return {"result": result}

@app.get("/refrigerator-recommend")
async def refrigerator_recommend():
    result=recommend_by_refrigerator()
    return {"result": result}