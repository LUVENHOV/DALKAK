'use server';

import { revalidateTag } from 'next/cache';

interface ISearchType {
  authorization: string;
  page: number;
  cocktailName?: string | null;
  ingredients?: number[] | null;
  base?: number | null;
  minAlcohol?: number | null;
  maxAlcohol?: number | null;
  color?: number | null;
  sweetness?: number | null;
  orderBy?: number | null;
}

export default async function getCocktailList(props: ISearchType) {
  const {
    authorization,
    page,
    cocktailName,
    ingredients,
    base,
    minAlcohol,
    maxAlcohol,
    color,
    sweetness,
    orderBy,
  } = props;

  console.log(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName || ''}&ingredients=${ingredients || ''}&base=${base || ''}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color || ''}&sweetness=${sweetness || ''}&orderBy=${orderBy}`,
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${page}&cocktail-name=${cocktailName || ''}&ingredients=${ingredients || ''}&base=${base || ''}&min-alcohol=${minAlcohol}&max-alcohol=${maxAlcohol}&color=${color || ''}&sweetness=${sweetness || ''}&orderBy=${orderBy}`,
    {
      headers: { authorization },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  revalidateTag('cocktailList');
}
