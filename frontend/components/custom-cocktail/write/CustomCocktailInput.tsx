'use client';

import styles from './CustomCocktailInput.module.scss';

import { ChangeEvent, useState } from 'react';

interface Props {
  max: number;
  placeText?: string;
}

interface StringNumberPair {
  slice(start?: number, end?: number): Array<string | number>;
}

export default function CustomCocktailInput({ max, placeText }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > max) {
      e.target.value = e.target.value.slice(0, max);
    }

    setInputValue(e.target.value); // 입력된 값을 상태로 업데이트합니다.
  };

  return (
    <div className={styles.container}>
      <input
        className={styles['input-style']}
        placeholder={placeText}
        value={inputValue}
        onChange={handleInputChange}
        maxLength={max}
      />
      <div className={styles['text-length']}>
        {inputValue.length}/{max}
      </div>
    </div>
  );
}
