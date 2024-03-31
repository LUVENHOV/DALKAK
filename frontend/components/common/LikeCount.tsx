'use client';

import { useState } from 'react';

import styles from './LikeCount.module.scss';

interface Props {
  count: number;
  cocktailId: number;
}

export default function LikeCount({ count, cocktailId }: Props) {
  const [isLike, setIsLike] = useState(false);
  const heart = () => {
    if (isLike === false) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  const token = process.env.NEXT_PUBLIC_TOKEN;

  const likeThisCocktail = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/${cocktailId}/like`,
      {
        headers: {
          Authorization: token ? `${token}` : '',
        },
      },
    );

    if (!response.ok) {
      const error = new Error('Failed to fetch data');

      throw error;
    } else {
      alert('해당 칵테일을 좋아요했습니다.');
      return;
    }
  };

  const dislikeThisCocktail = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/${cocktailId}/dislike`,
      {
        headers: {
          Authorization: token ? `${token}` : '',
        },
      },
    );

    if (!response.ok) {
      const error = new Error('Failed to fetch data');

      throw error;
    } else {
      alert('해당 칵테일을 좋아요취소했습니다.');
      return;
    }
  };

  return (
    <div className={styles.flex}>
      <button type="button" onClick={heart}>
        {isLike === false ? <div>🤍</div> : <div>🖤</div>}
      </button>
      {count}
      <button onClick={likeThisCocktail}>좋아요</button>
      <button onClick={dislikeThisCocktail}>좋아요취소</button>
    </div>
  );
}
