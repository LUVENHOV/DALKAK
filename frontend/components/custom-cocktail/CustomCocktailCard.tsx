'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './CustomCocktailCard.module.scss';

interface Custom {
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}

interface Props {
  custom: Custom;
}

export default function CustomCocktailCard({ custom }: Props) {
  const router = useRouter();
  const goToDetail = () => {
    router.push('/cocktail/1');
  };
  return (
    <div className={styles['grid-item']}>
      <button
        type="button"
        onClick={goToDetail}
        className={styles['image-box']}
      >
        <img
          className={styles['custom-img']}
          src={custom.imageLink}
          alt={custom.title}
        />
        <div className={styles.author}>
          by&nbsp;
          {custom.author}
        </div>
      </button>
      <div className={styles.title}>{custom.title}</div>
      <div className={styles.comment}>{custom.comment}</div>
    </div>
  );
}
