/* eslint-disable no-nested-ternary */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './LikeCount.module.scss';

import emptyheart from '../../public/assets/imgs/emptyheart.png';
import heartImage from '../../public/assets/imgs/heartImage.png';
import authStore from '@/store/authStore';

interface Props {
  count: number;
  cocktailId: number;
  isLiked: boolean;
}

export default function LikeCount({ count, cocktailId, isLiked }: Props) {
  const [isLike, setIsLike] = useState(isLiked);
  // const [isClient, setIsClient] = useState(false);
  const [initialCount, setInitialCount] = useState(count);
  const [state, setState] = useState(0);
  // useEffect(() => {
  //   setIsClient(true);
  // }, [count, initialCount]);

  useEffect(() => {
    if (state === 1) {
      setInitialCount(count + 1);
    } else if (state === 2) {
      setInitialCount(count - 1);
    }
  }, [state, count]);

  const token = () => authStore.getState().accessToken;

  const likeThisCocktail = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/${cocktailId}/like`,
      {
        headers: {
          Authorization: token() ? token() : '',
        },
      },
    );

    if (!response.ok) {
      const error = new Error('Failed to fetch data');
      // setInitialCount((prevInitialCount) => prevInitialCount + 1);
      setState(1);
      // setInitialCount(count + 1);
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
          Authorization: token() ? token() : '',
        },
      },
    );

    if (!response.ok) {
      const error = new Error('Failed to fetch data');

      setState(2);

      throw error;
    } else {
      alert('해당 칵테일 좋아요를 취소했습니다.');
    }
  };

  const heart = async () => {
    try {
      if (isLike === false) {
        likeThisCocktail();
        setInitialCount(initialCount + 1);
        setIsLike(true);
      } else {
        dislikeThisCocktail();
        setInitialCount(initialCount - 1);
        setIsLike(false);
      }
    } catch (error) {
      console.error('Error');
    }
  };

  return (
    <div>
      <div className={styles.flex}>
        <button type="button" onClick={heart}>
          {isLike ? (
            // eslint-disable-next-line react/jsx-no-undef
            <Image className={styles.hearts} src={heartImage} alt="하트" />
          ) : (
            <Image className={styles.hearts} src={emptyheart} alt="빈하트" />
          )}
        </button>
        <div>{initialCount}</div>
      </div>
    </div>
  );
}
