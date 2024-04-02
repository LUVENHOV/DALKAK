import styles from './refrigerator-recommend.module.scss';

import { ICocktailType } from '../../../type/searchTypes';
// import CocktailCard from '@/components/cocktail-list/CocktailCard';
import RecommendList from '@/components/store/RecommendList';

let zeroList: ICocktailType[] = [];
let nonZeroList: ICocktailType[] = [];

const authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

const getRecommentResult = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/recommends/refrigerator`,
    {
      headers: { authorization },
    },
  );
  const json = await res.json();
  // console.log(await json.data);
  zeroList = await json.data.zero;
  nonZeroList = await json.data.non_zero;
};

export default function Page() {
  getRecommentResult();
  return (
    <div>
      <RecommendList
        title="내가 가진 재료들로 만들 수 있는 칵테일이에요"
        cocktailList={zeroList}
      />
      <div className={styles['divide-line']} />
      <RecommendList
        title="재료가 좀 더 있으면 이런 것도 가능해요!"
        cocktailList={nonZeroList}
      />
    </div>
  );
}
