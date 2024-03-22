'use client';

import React from 'react';

import Image from 'next/image';

import styles from './CustomCocktailList.module.scss';
import cocktails from '../../public/assets/imgs/cocktails.png';
import cocktails2 from '../../public/assets/imgs/cocktails2.png';
import fireworks from '../../public/assets/imgs/fireworks.png';

export default function CustomCocktailList() {
  return (
    <div>
      <div className={styles.line}>
        <div className={styles.space}>
          <Image
            className={styles.img1}
            src={cocktails}
            width={1000}
            height={1000}
            alt="칵테일1"
          />
          <div className={styles.overlap}>
            <Image
              className={styles.img3}
              src={fireworks}
              width={1000}
              height={1000}
              alt="폭죽"
            />
            <Image
              className={styles.img2}
              src={cocktails2}
              width={1000}
              height={1000}
              alt="칵테일2"
            />
          </div>
        </div>
        <hr className={styles.divided} />
      </div>
    </div>
  );
}
