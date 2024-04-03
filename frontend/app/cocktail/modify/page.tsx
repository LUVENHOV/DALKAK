'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import CustomCocktailModify from '@/components/custom-cocktail/modify/CustomCocktailModify';

// interface ICustomType {
//   id: number;
//   image: string;
//   name: string;
//   summary: string;
//   user: {
//     id: number;
//     nickname: string;
//   };
// }

export default function Page() {
  const searchParams = useSearchParams();
  const customId = searchParams.get('id');
  let customIdInt = 1;
  if (customId) {
    customIdInt = parseInt(customId, 10);
  }
  return (
    <div>
      <CustomCocktailModify customId={customIdInt} />
    </div>
  );
}
