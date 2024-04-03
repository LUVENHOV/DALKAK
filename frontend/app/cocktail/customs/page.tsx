'use client';

import { useSearchParams } from 'next/navigation';
import CustomCocktailList from '@/components/custom-cocktail/list/CustomCocktailList';
// import { ICocktailType } from '@/type/searchTypes';

export default function Page() {
  const searchParams = useSearchParams();
  const cocktailId = searchParams.get('id');
  let cocktailIdInt = 1;
  if (cocktailId) {
    cocktailIdInt = parseInt(cocktailId, 10);
  }
  return (
    <div>
      <CustomCocktailList cocktailId={cocktailIdInt} />
    </div>
  );
}
