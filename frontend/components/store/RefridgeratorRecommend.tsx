'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './RefridgeratorRecommend.module.scss';
import refrigeratorRecommemd from '@/public/assets/imgs/refrigeratorRecommend.png';

export default function RefridgeratorRecommend() {
  return (
    <Link href="/storage/recommend" prefetch={false}>
      <div className={styles.container}>
        <div className={styles['image-wrapper']}>
          <Image
            src={refrigeratorRecommemd}
            width={1000}
            alt="냉장고 추천 이미지"
          />
        </div>
        <div className={styles['text-container']}>
          <h3 className={styles.title}>이 재료로</h3>
          <h3 className={styles.title}>추천 받기</h3>
          <div className={styles['color-block']} />
        </div>
      </div>
    </Link>
  );
}
