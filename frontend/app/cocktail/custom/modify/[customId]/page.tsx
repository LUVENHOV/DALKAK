import React from 'react';

export default function Page() {
  return (
    <div>
      <h1>커스텀 칵테일 수정 페이지</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const dummyCocktailId = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return dummyCocktailId.map((cocktail) => ({
    customId: cocktail.id.toString(),
  }));
}
