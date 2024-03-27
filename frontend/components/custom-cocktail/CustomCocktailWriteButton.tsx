'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import styles from './CustomCocktailWriteButton.module.scss';

export default function CustomCocktailWriteButton() {
  const router = useRouter();
  const alertPopup = () => {
    router.push('/cocktail/custom/write/1');
  };

  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles['custom-create-button']}
          type="button"
          onClick={alertPopup}
        >
          나만의 커스텀 레시피 만들기
        </button>
      </div>
    </div>
  );
}
