/* eslint-disable no-nested-ternary */

'use client';

import { useState, useEffect } from 'react';

import styles from './LikeCount.module.scss';

interface Props {
  count: number;
  cocktailId: number;
  isLiked: boolean;
}

export default function LikeCount({ count, cocktailId, isLiked }: Props) {
  const [isLike, setIsLike] = useState(isLiked);
  const [isClient, setIsClient] = useState(false);
  const [initialCount, setInitialCount] = useState(count);
  const [state, setState] = useState(0);

  useEffect(() => {
    setIsClient(true);
    // setInitialCount(count);
  }, [count, initialCount]);

  useEffect(() => {
    // state 값이 변경될 때마다 UI를 업데이트
  }, [state]);

  // useEffect(() => {
  //   if (initialCount !== count) {
  //     setInitialCount(count);
  //   }
  // }, [count, initialCount]);

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
      // setInitialCount((prevInitialCount) => prevInitialCount + 1);
      setState(1);
      setInitialCount(count + 1);
      throw error;
    } else {
      alert('해당 칵테일을 좋아요했습니다.');
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
      // setInitialCount((prevInitialCount) => prevInitialCount - 1);
      setState(2);
      setInitialCount(count - 1);
      throw error;
    } else {
      alert('해당 칵테일을 좋아요취소했습니다.');
    }
  };

  const heart = async () => {
    try {
      if (isLike === false) {
        likeThisCocktail();
        setIsLike(true);
      } else {
        dislikeThisCocktail();
        setIsLike(false);
      }
    } catch (error) {
      console.error('Error');
    }
  };

  return (
    <div>
      {isClient && (
        <div className={styles.flex}>
          <button type="button" onClick={heart}>
            {isLike ? '🖤' : '🤍'}
          </button>
          <div>
            {state === 0
              ? initialCount
              : state === 1
                ? initialCount + 1
                : initialCount - 1}
          </div>
        </div>
      )}
    </div>
  );
}
