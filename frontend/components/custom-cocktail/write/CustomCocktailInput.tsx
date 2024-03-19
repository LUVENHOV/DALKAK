'use client';

import styles from './CustomCocktailInput.module.scss';

import { SetStateAction, useState } from 'react';

export default function CustomCocktailInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value); // 입력된 값을 상태로 업데이트합니다.
  };
  return (
    <div className={styles.container}>
      <input
        className={styles['input-style']}
        placeholder="입력창"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className={styles['text-length']}>{inputValue.length}/15</div>
    </div>
  );
}
