'use client';

import React, { useState, useEffect } from 'react';
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
        setTopCocktails(result.data.heart_rank_list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // console.log(topCocktails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
      if (currentIndex < 9) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
        // console.log(currentIndex);
      } else {
        setCurrentIndex(1);
      }
    }, 1500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const currentCocktailId = topCocktails[currentIndex + 1]?.cocktail_id;

  const goToDetail = () => {
    if (currentCocktailId !== undefined) {
      router.push(`/cocktail/${currentCocktailId}`);
    }
  };

  const secondIndex = `${currentIndex + 1}`;
  const thirdIndex = `${currentIndex + 2}`;

  const currentCocktailName =
    topCocktails[currentIndex]?.cocktail_korean_name || '';
  const first = '';
  // const firstCocktailName = topCocktails[0]?.cocktail_korean_name || '';
  // const current = `${currentIndex + 1}  ${currentCocktailName}`;
  const nextCocktailName =
    topCocktails[currentIndex + 1]?.cocktail_korean_name || '';
  // const next = `${currentIndex + 2}  ${nextCocktailName}`;

  const current = `${currentCocktailName}`;
  const next = `${nextCocktailName}`;

  return (
    <div>
      <div>
        <div className={styles.parent}>
          {currentIndex === 0 && (
            <div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                {first}
              </div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{secondIndex} &nbsp;</span>
                {current}
              </div>
            </div>
          )}
          {currentIndex === 1 && (
            <div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{secondIndex} &nbsp;</span>
                {topCocktails[1].cocktail_korean_name}
              </div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{thirdIndex} &nbsp;</span>
                {next}
              </div>
            </div>
          )}

          {currentIndex !== 0 && currentIndex !== 1 && currentIndex !== 9 && (
            <div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{secondIndex} &nbsp;</span>
                {current}
              </div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{thirdIndex} &nbsp;</span>
                {next}
              </div>
            </div>
          )}
          {currentIndex === 9 && (
            <div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>{secondIndex} &nbsp;</span>
                {current}
              </div>
              <div
                role="presentation"
                onClick={goToDetail}
                className={styles['slide-test']}
              >
                <span className={styles.point}>1 &nbsp;</span>
                {topCocktails[0]?.cocktail_korean_name}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
