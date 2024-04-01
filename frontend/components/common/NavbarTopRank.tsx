'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from './NavbarTopRank.module.scss';

interface Top_Cocktails {
  cocktail_id: number;
  cocktail_korean_name: string;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function NavbarTopRank() {
  const router = useRouter();
  const [topCocktails, setTopCocktails] = useState<Top_Cocktails[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recommends/heart-rank`, {
      headers: {
        Authorization: token ? `${token}` : '',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        // console.log(result.data);
        // console.log(result.data.heart_rank_list);
        setTopCocktails(result.data.heart_rank_list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    console.log(topCocktails);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 9) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
      } else {
        setCurrentIndex(0);
      }
    }, 1510);

    return () => clearInterval(interval);
  }, []);

  const currentCocktailId = topCocktails[currentIndex + 1]?.cocktail_id;

  const goToDetail = () => {
    if (currentCocktailId !== undefined) {
      router.push(`/cocktail/${currentCocktailId}`);
    } else {
      return;
    }
  };

  const currentCocktailName =
    topCocktails[currentIndex]?.cocktail_korean_name || '';
  const first = '';
  const current = `${currentIndex + 1}  ${currentCocktailName}`;
  const nextCocktailName =
    topCocktails[currentIndex + 1]?.cocktail_korean_name || '';
  const next = `${currentIndex + 2}  ${nextCocktailName}`;

  return (
    <div>
      <div>
        <div className={styles.parent}>
          {currentIndex === 0 && (
            <>
              <div onClick={goToDetail} className={styles['slide-test']}>
                {first}
              </div>
              <div onClick={goToDetail} className={styles['slide-test']}>
                {current}
              </div>
            </>
          )}
          {currentIndex !== 0 && currentIndex !== 9 && (
            <>
              <div onClick={goToDetail} className={styles['slide-test']}>
                {current}
              </div>
              <div onClick={goToDetail} className={styles['slide-test']}>
                {next}
              </div>
            </>
          )}
          {currentIndex === 9 && (
            <>
              <div onClick={goToDetail} className={styles['slide-test']}>
                {current}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
