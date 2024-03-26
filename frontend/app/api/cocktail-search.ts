'use server';

import { revalidateTag } from 'next/cache';
import useSearchStore from '@/store/searchStore';

export default async function useCocktailList(authorization: string) {
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

  return (await res.json()).data.cocktails;

  // revalidateTag('cocktailList');
}
