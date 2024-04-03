/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

'use client';

import React, { useEffect, useState } from 'react';
import CustomCocktailCard from './CustomCocktailCard';

import styles from './CustomCocktailCardWrapper.module.scss';
import authStore from '@/store/authStore';

interface ICustomCocktail {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface Props {
  dummy: ICustomCocktail[];
  type: string;
  cocktailId: number;
}

export default function CustomCocktailList({ dummy, type, cocktailId }: Props) {
  const [customList, setCustomList] = useState<ICustomCocktail[]>([]);

  const getAccessToken = () => authStore.getState().accessToken;
  const authorization = getAccessToken();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/${cocktailId}`, {
      headers: {
        authorization,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        console.log('>>', result.data.custom_cocktails);
        setCustomList(result.data.custom_cocktails);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [authorization, cocktailId]);

  return (
    <div className={styles.container}>
      <ul className={styles['grid-container']}>
        {type === 'small'
          ? customList?.map((item) => (
              <CustomCocktailCard key={item.id} custom={item} type={type} />
            ))
          : dummy?.map((item) => (
              <CustomCocktailCard key={item.id} custom={item} type={type} />
            ))}
      </ul>
    </div>
  );
}
