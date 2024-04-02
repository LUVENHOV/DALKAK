import React from 'react';

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

export default function Page({ params }: { params: { customId: string } }) {
  const { customId } = params;
  const customIdInt = parseInt(customId, 10);
  return (
    <div>
      <CustomCocktailModify customId={customIdInt} />
    </div>
  );
}

export async function generateStaticParams() {
  const staticParamList = [];
  for (let i = 1; i <= 3165; i += 1) {
    staticParamList.push({ customId: i.toString() });
  }
  return staticParamList;
}
