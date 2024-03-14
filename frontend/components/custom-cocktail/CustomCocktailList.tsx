'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const goToDetail = () => {
    router.push('/cocktail/1');
  };
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

      <div className={styles.container}>
        <ul className={styles['grid-container']}>
          {dummy.map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={styles['grid-item']}>
              <div>
                <button
                  type="button"
                  onClick={goToDetail}
                  className={styles['image-box']}
                >
                  <img
                    className={styles['custom-img']}
                    src={data.imageLink}
                    alt={data.title}
                  />
                  <div className={styles.author}>
                    by&nbsp;
                    {data.author}
                  </div>
                </button>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.comment}>{data.comment}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
