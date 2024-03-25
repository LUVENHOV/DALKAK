import React from 'react';

import styles from './CocktailList.module.scss';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import searchStore from '@/store/searchStore';

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

export default async function CocktailList({ cocktailList }: IListType) {
  return (
    <div className={styles['cocktail-list']}>
      {cocktailList.map((cocktail: ICocktailType) => (
        <CocktailCard
          key={cocktail.id}
          id={cocktail.id}
          name={cocktail.name}
          koreanName={cocktail.korean_name}
          image={cocktail.image}
          heartCount={cocktail.heart_count}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';
  const page = searchStore((state) => state.page);
  const cocktailName = searchStore((state) => state.cocktailName);
  const ingredients = searchStore((state) => state.ingredients);
  const base = searchStore((state) => state.base);
  const minAlcohol = searchStore((state) => state.minAlcohol);
  const maxAlcohol = searchStore((state) => state.maxAlcohol);
  const color = searchStore((state) => state.color);
  const sweetness = searchStore((state) => state.sweetness);
  const orderBy = searchStore((state) => state.orderBy);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName}&ingredients=${ingredients}&base=${base}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color}&sweetness=${sweetness}&orderBy=${orderBy}`,
    {
      headers: { authorization },
      next: { tags: ['cocktailList'] },
    },
  );
  const cocktailList = (await res.json()).data.cocktails;
  return { props: { cocktailList } };
}
