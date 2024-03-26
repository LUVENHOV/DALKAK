'use client';

import React, { useEffect, useState } from 'react';

import styles from './CocktailList.module.scss';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import useSearchStore from '@/store/searchStore';

interface ICocktailType {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
}

interface ISearchType {
  page: number;
  cocktailName: string;
  ingredients: number[];
  base: number;
  minAlcohol: number;
  maxAlcohol: number;
  color: number;
  sweetness: number;
  orderBy: number;
}

const authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';

const getCocktailList = async ({
  page,
  cocktailName,
  ingredients,
  base,
  minAlcohol,
  maxAlcohol,
  color,
  sweetness,
  orderBy,
}: ISearchType) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName}&ingredients=${ingredients}&base=${base}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color}&sweetness=${sweetness}&orderBy=${orderBy}`,
    {
      headers: { authorization },
      next: { tags: ['cocktailList'] },
    },
  );
  const json = await res.json();
  console.log(json.data.cocktails);
  return (await json).data.cocktails;
};

export default function CocktailList() {
  const {
    page,
    cocktailName,
    ingredients,
    base,
    minAlcohol,
    maxAlcohol,
    color,
    sweetness,
    orderBy,
  } = useSearchStore();

  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    const updateViews = async () => {
      const cocktailRes = await getCocktailList({
        page,
        cocktailName,
        ingredients,
        base,
        minAlcohol,
        maxAlcohol,
        color,
        sweetness,
        orderBy,
      });
      setCocktailList(cocktailRes);
    };
    updateViews();
  }, [
    page,
    cocktailName,
    ingredients,
    base,
    minAlcohol,
    maxAlcohol,
    color,
    sweetness,
    orderBy,
  ]);

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
