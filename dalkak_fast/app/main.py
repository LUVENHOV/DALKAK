from fastapi import FastAPI, Depends
from .recommend.recommend import recommend_by_prefer
from .recommend.recommend import recommend_by_refrigerator
from sqlalchemy.orm import Session
from .database.database import get_session

app = FastAPI(docs_url="/fast/docs", openapi_url='/fast/openapi.json')

@app.get("/fast")
def read_root():
    return {"Hello": "World"}

@app.get("/fast/prefer-recommend/{m_id}")
async def prefer_recommend(m_id: int, session: Session = Depends(get_session)):
    try:
        result= recommend_by_prefer(m_id,session)
        return {"result": result}
    except Exception as e:
        session.rollback()  # 예외 발생 시 롤백
        raise e
    

@app.get("/fast/refrigerator-recommend/{m_id}")
async def refrigerator_recommend(m_id:int, session: Session = Depends(get_session)):
    try:
        result=recommend_by_refrigerator(m_id,session)
        return {"result": result}
    except Exception as e:
        session.rollback()  # 예외 발생 시 롤백
        raise e