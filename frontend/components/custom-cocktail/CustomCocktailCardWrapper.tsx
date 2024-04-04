/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

'use client';

import CustomCocktailCard from './CustomCocktailCard';

import styles from './CustomCocktailCardWrapper.module.scss';

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
}

export default function CustomCocktailList({ dummy, type }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles['grid-container']}>
        {dummy?.map((item) => (
          <CustomCocktailCard key={item.id} custom={item} type={type} />
        ))}
      </ul>
    </div>
  );
}
