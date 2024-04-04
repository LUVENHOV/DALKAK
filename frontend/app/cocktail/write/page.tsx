'use client';

import { useSearchParams } from 'next/navigation';
import CustomCocktailWriteTest from '@/components/custom-cocktail/write/CustomCocktailWriteTest';

export default function Page() {
  const searchParams = useSearchParams();
  const cocktailId = searchParams.get('id');
  let cocktailIdInt = 1;
  if (cocktailId) {
    cocktailIdInt = parseInt(cocktailId, 10);
  }
  return (
    <div>
      <div>
        <CustomCocktailWriteTest cocktailId={cocktailIdInt} />
      </div>
    </div>
  );
}
