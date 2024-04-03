'use client';

import React, { useEffect, useState } from 'react';

import styles from './CocktailList.module.scss';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import authStore from '@/store/authStore';
import useSearchStore from '@/store/searchStore';
import { ICocktailType, ISearchParamsType } from '@/type/searchTypes';

const getAccessToken = () => authStore.getState().accessToken;
const authorization = getAccessToken();

const getCocktailList = async ({
  page,
  cocktailName,
  base,
  minAlcohol,
  maxAlcohol,
  color,
  sweetness,
  orderBy,
  setTotalPage,
  getIngredientsId,
}: ISearchParamsType) => {
  const ingredients = getIngredientsId();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName}&ingredients=${ingredients}&base=${base || ''}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color || ''}&sweetness=${sweetness || ''}&orderBy=${orderBy}`,
    {
      headers: { authorization },
      next: { tags: ['cocktailList'] },
    },
  );
  const json = await res.json();
  setTotalPage((await json).data.total_page);
  return (await json).data.cocktails;
};

export default function CocktailList() {
  const {
    page,
    cocktailName,
    base,
    minAlcohol,
    maxAlcohol,
    color,
    sweetness,
    orderBy,
    activateSearch,
    setTotalPage,
    getIngredientsId,
  } = useSearchStore();

  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    const updateViews = async () => {
      const cocktailRes = await getCocktailList({
        page,
        cocktailName,
        base,
        minAlcohol,
        maxAlcohol,
        color,
        sweetness,
        orderBy,
        activateSearch,
        setTotalPage,
        getIngredientsId,
      });
      setCocktailList(cocktailRes);
    };
    updateViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activateSearch]);

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
