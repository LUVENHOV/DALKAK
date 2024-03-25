'use client';

import React from 'react';
import CustomCocktailCard from './CustomCocktailCard';

import styles from './CustomCocktailCardWrapper.module.scss';

interface Custom_Cocktails {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface Dummy {
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}

// interface PreviewDummy {
//   custom_id: number;
//   custom_name: string;
//   custom_image: string;
//   summary: string;
//   user_id: number;
//   user_nickname: string;
// }

interface Props<T> {
  dummy: T[];
}

export default function CustomCocktailList<T extends Dummy | Custom_Cocktails>({
  dummy,
}: Props<T>) {
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles['grid-container']}>
          {dummy.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CustomCocktailCard key={index} custom={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
