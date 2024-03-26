import React from 'react';

import styles from './CocktailList.module.scss';
import useCocktailList from '@/app/api/cocktail-search';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import searchStore from '@/store/searchStore';
import useSearchStore from '@/store/searchStore';

interface ICocktailType {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
}

interface IListType {
  cocktailList: ICocktailType[];
}

export default function CocktailList() {
  // const {
  //   page,
  //   cocktailName,
  //   ingredients,
  //   base,
  //   minAlcohol,
  //   maxAlcohol,
  //   color,
  //   sweetness,
  //   orderBy,
  // } = useSearchStore();

  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';

  const cocktailList = useCocktailList(authorization);
  // const res = fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName}&ingredients=${ingredients}&base=${base}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color}&sweetness=${sweetness}&orderBy=${orderBy}`,
  //   {
  //     headers: { authorization },
  //     next: { tags: ['cocktailList'] },
  //   },
  // );
  // const cocktailList = res;
  console.log(cocktailList);

  return (
    <div className={styles['cocktail-list']}>
      {/* {cocktailList.map((cocktail: ICocktailType) => (
        <CocktailCard
          key={cocktail.id}
          id={cocktail.id}
          name={cocktail.name}
          koreanName={cocktail.korean_name}
          image={cocktail.image}
          heartCount={cocktail.heart_count}
        />
      ))} */}
    </div>
  );
}
