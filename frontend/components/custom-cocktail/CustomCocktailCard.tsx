'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import styles from './CustomCocktailCard.module.scss';

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

interface Props {
  custom: Custom_Cocktails;
  type: string;
}

export default function CustomCocktailCard({ custom, type }: Props) {
  const router = useRouter();

  console.log(custom);

  const goToDetail = () => {
    router.push(`/cocktail/custom/detail/${custom.id}`);
  };

  const previewImageName =
    type === 'big' ? styles['custom-img'] : styles['custom-img-preview'];

  const previewTitleName =
    type === 'big' ? styles.title : styles['title-preview'];

  const previewCommentName =
    type === 'big' ? styles.comment : styles['comment-preview'];

  return (
    <div className={styles['grid-item']}>
      <button
        type="button"
        onClick={goToDetail}
        className={styles['image-box']}
      >
        <img
          className={previewImageName}
          src={custom.image}
          alt={custom.name}
        />
        <div className={styles.author}>{custom.user.nickname}</div>
      </button>
      <div className={previewTitleName}>{custom.name}</div>
      <div className={previewCommentName}>{custom.summary}</div>
    </div>
  );
}
