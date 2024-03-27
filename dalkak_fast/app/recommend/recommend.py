from sqlalchemy.orm import Session
from database.dataloader import DataLoader
from database.models import *
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

def recommend_by_prefer( m_id: int, db: Session):
  # 데이터프레임
  df=pd.DataFrame()
  
  loader = DataLoader(db)
  # 싫어하는 재료
  dislike_ingredients=loader.load_dislike_ingredient(m_id)
  
  # 후보군 칵테일
  candidates=set()
  # 사용자가 좋아요 한 칵테일
  heart_cocktails=loader.load_heart_cocktails(m_id)
  # 후보군 칵테일에 좋아요한 칵테일 + 같은 군집내의 칵테일 넣기
  clustered_df=pd.read_csv("./clustered_data.csv")
  for h in heart_cocktails:
    group=clustered_df.iloc[h._data[0]-1]['cluster_label']
    filtered_rows = clustered_df[clustered_df['cluster_label'] == group]
    for k in filtered_rows['cluster_label'].to_dict().keys():
      candidates.add(k+1)
  
  # candidates의 길이가 짧으면 설문조사에서 선택한 칵테일의 군집도 추가
  if len(candidates)<30:
    survey_cocktails=loader.load_survey_cocktails(m_id)
    for s in survey_cocktails:
      group=clustered_df.iloc[s._data[0]-1]['cluster_label']
      filtered_rows = clustered_df[clustered_df['cluster_label'] == group]
      for k in filtered_rows['cluster_label'].to_dict().keys():
        candidates.add(k+1)
  
  # 설문조사 결과
  survey_res=loader.load_survey_res(m_id)
  # print(survey_res[0]._data[1])
  survey_res_df=pd.DataFrame({'base':[survey_res[0]._data[0]],'alcohol_content':[survey_res[0]._data[1]],'sweetness':[survey_res[0]._data[2]]})
  print(survey_res_df)
  # return _sort_by_survey()

# 사용자 그룹별로 랭킹
# def recommend_by_ppl(m_id: int):


def recommend_by_refrigerator():
  pass

# 설문 조사 결과 이용해서 코사인 정렬
def _sort_by_survey():
  pass