import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

def survey_recommend():
  df=pd.read_csv("/var/lib/jenkins/workspace/FastAPI/dalkak_fast/app/total.csv")


  df=df.replace(["red","orange","yellow","green","blue","purple","pink","brown","white","clear","none"],["0","1","2","3","4","5","6","7","8","9","10"])
  df=df[['ingredient','description','degree','sugar','base_spirit']]

  def process_ingredients(ingredient):
      parts = ingredient.split("|")  # "|"로 분리
      last_parts = [part.split(",")[-1] for part in parts]  # 각 부분의 마지막 요소 추출
      return ",".join(last_parts)  # 추출된 마지막 요소들을 ","로 연결

  df['ingredient'] = df['ingredient'].apply(process_ingredients)
  # df['occasion']=df['type'].apply(process_occasion)
  # del df['type']

  one_hot_encoded=df['base_spirit'].str.get_dummies(sep='|')
  df = pd.concat([df, one_hot_encoded], axis=1)
  del df['base_spirit']

  # df['오후 술'] = df['occasion'].apply(lambda x: 1 if '오후 술' in x else 0)
  # df['식전 술'] = df['occasion'].apply(lambda x: 1 if '식전 술' in x else 0)
  # df['식후 술'] = df['occasion'].apply(lambda x: 1 if '식후 술' in x else 0)
  # df['저녁 술'] = df['occasion'].apply(lambda x: 1 if '저녁 술' in x else 0)
  # del df['occasion']

  spice= set(['스타아니스','마늘 소금','바닐라','민트','발사믹 식초','민트잎','멀드 스파이스','개 계피','서양고추냉이','정제된 설탕','계피',
          '수즈','소금','버터','할라피뇨','칠레 고추','스테비아','바닐라 추출물','루쿠마 파우더','마카 파우더','간 생강','너트맥','커피 원두',
          '핑크 페퍼','황설탕','갈설탕(흰색)','블랙페퍼 가루','셀러리 솔트','블루 버터플라이 피 블로섬 추출물','말차 파우더'])
  def process_spice(ingredient):
    tmp=ingredient.split(",")
    for t in tmp:
      if t in spice:
        return 1
    return 0
  df['spice'] = df['ingredient'].apply(process_spice)

  set1=set(df.loc[0]['ingredient'].split(","))
  def jaccard_sim(ingredient):
    set2=set(ingredient.split(","))
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union
  df['jaccard_sim'] = df['ingredient'].apply(jaccard_sim)

  del df['ingredient']
  del df['description']

  cosine_sim = cosine_similarity(df.loc[0].values.reshape(1, -1), df.values)
  df['cosine_sim']=cosine_sim[0]

  df=df.sort_values(by='jaccard_sim' ,ascending=False)

  res=df.head(5).index.tolist()
  return res




