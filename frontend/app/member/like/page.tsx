'use client';

import React from 'react';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import memberStore from '@/store/memberStore';
import './page.scss';

export default function Page() {
  const myCocktails = memberStore((state) => state.myCocktails);
  const nickname = memberStore((state) => state.nickname);
  console.log(myCocktails);

  return (
    <div className="wrapper">
      <h2>{nickname} 님이 좋아하시는 칵테일이에요!</h2>
      <div className="grid">
        {myCocktails?.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.name}
            koreanName={cocktail.koreanName}
            image={cocktail.image}
            heartCount={cocktail.heartCount}
          />
        ))}
      </div>
    </div>
  );
}
