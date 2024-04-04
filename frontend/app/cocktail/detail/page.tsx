'use client';

import { useSearchParams } from 'next/navigation';

/* eslint-disable indent */
import CustomCocktailDetail from '@/components/custom-cocktail/detail/CustomCocktailDetail';

export default function Page() {
  const searchParams = useSearchParams();
  const customId = searchParams.get('id');
  let customIdInt = 1;
  if (customId) {
    customIdInt = parseInt(customId, 10);
  }

  return (
    <div>
      <CustomCocktailDetail customId={customIdInt} />
    </div>
  );
}
