'use client';

import React from 'react';

import Image from 'next/image';

import CustomCocktailCard from './CustomCocktailCard.tsx';
import styles from './CustomCocktailList.module.scss';
import cocktails from '../../public/assets/imgs/cocktails.png';
import cocktails2 from '../../public/assets/imgs/cocktails2.png';
import fireworks from '../../public/assets/imgs/fireworks.png';

interface Dummy {
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}

interface Props {
  dummy: Dummy[];
}

export default function CustomCocktailList({ dummy }: Props) {
  return (
    <div>
      <div className={styles.line}>
        <div className={styles.space}>
          <Image className={styles.img1} src={cocktails} alt="칵테일1" />
          <div className={styles.overlap}>
            <Image className={styles.img3} src={fireworks} alt="폭죽" />
            <Image className={styles.img2} src={cocktails2} alt="칵테일2" />
          </div>
        </div>
        <hr className={styles.divided} />
      </div>

      {/* 커스텀 칵테일 카드 테스트 */}

      <div className={styles.container}>
        <ul className={styles['grid-container']}>
          {dummy.map((custom, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CustomCocktailCard key={index} custom={custom} />
          ))}
        </ul>
      </div>
    </div>
  );
}
