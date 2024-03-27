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

interface Props<T> {
  custom: T;
}

export default function CustomCocktailCard<
  T extends Custom | Custom_Cocktails,
>({ custom }: Props<T>) {
  const router = useRouter();
  const goToDetail = () => {
    router.push('/cocktail/custom/detail/1');
  };

  const previewImageName =
    'imageLink' in custom ? styles['custom-img'] : styles['custom-img-preview'];

  const previewTitleName =
    'title' in custom ? styles.title : styles['title-preview'];

  const previewCommentName =
    'comment' in custom ? styles.comment : styles['comment-preview'];

  return (
    <div className={styles['grid-item']}>
      <button
        type="button"
        onClick={goToDetail}
        className={styles['image-box']}
      >
        <img
          className={previewImageName}
          src={
            (custom as Custom).imageLink || (custom as Custom_Cocktails).image
          }
          alt={(custom as Custom).title || (custom as Custom_Cocktails).name}
        />
        <div className={styles.author}>
          by&nbsp;{' '}
          {(custom as Custom).author ||
            (custom as Custom_Cocktails).user.nickname}
        </div>
      </button>
      <div className={previewTitleName}>
        {(custom as Custom).title || (custom as Custom_Cocktails).user.id}
      </div>
      <div className={previewCommentName}>
        {(custom as Custom).comment || (custom as Custom_Cocktails).summary}
      </div>
    </div>
  );
}
