'use client';

import React from 'react';
import { useState, useEffect } from 'react';

import styles from './NavbarTopRank.module.scss';

interface Top_Cocktails {
  name: string;
  cocktailId: number;
}

interface TopTen {
  top_cocktails: Top_Cocktails[];
}

const topTen: TopTen = {
  top_cocktails: [
    {
      name: '에스프레소 마티니',
      cocktailId: 1,
    },
    {
      name: '코스모폴리탄',
      cocktailId: 2,
    },
    {
      name: '보드카 크랜베리',
      cocktailId: 3,
    },
    {
      name: '애플티니',
      cocktailId: 4,
    },
    {
      name: '스키니비치',
      cocktailId: 5,
    },
    {
      name: '폰스타 마티니',
      cocktailId: 6,
    },
    {
      name: '그랜드라인 피즈',
      cocktailId: 7,
    },
    {
      name: '패션 프루트 마티니',
      cocktailId: 8,
    },
    {
      name: '블루 하와이안',
      cocktailId: 9,
    },
    {
      name: '보드카 진저 엘',
      cocktailId: 10,
    },
  ],
};

export default function NavbarTopRank() {
  const [topCocktails, setTopCocktails] = useState<Top_Cocktails[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTopCocktails(topTen.top_cocktails);
  }, []);

  //   console.log(currentIndex);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 9) {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % topTen.top_cocktails.length,
        );
      } else {
        setCurrentIndex(0);
      }
    }, 1510);

    return () => clearInterval(interval);
  }, []);

  const currentCocktailName = topCocktails[currentIndex]?.name || '';
  // const current = `${currentIndex + 1}  ${currentCocktailName}`;
  const first = '';
  const current = `${currentIndex + 1}  ${currentCocktailName}`;
  const nextCocktailName = topCocktails[currentIndex + 1]?.name || '';
  const next = `${currentIndex + 2}  ${nextCocktailName}`;
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     }, 1500);

  //     console.log(currentIndex);
  //     return () => clearInterval(interval);
  //   });

  //   console.log(currentIndex);

  return (
    <div>
      <div>
        <div className={styles.parent}>
          {currentIndex === 0 && (
            <>
              <div className={styles['slide-test']}>{first}</div>
              <div className={styles['slide-test']}>{current}</div>
            </>
          )}
          {currentIndex !== 0 && currentIndex !== 9 && (
            <>
              <div className={styles['slide-test']}>{current}</div>
              <div className={styles['slide-test']}>{next}</div>
            </>
          )}
          {currentIndex === 9 && (
            <>
              <div className={styles['slide-test']}>{current}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
