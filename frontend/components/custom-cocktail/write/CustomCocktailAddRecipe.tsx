'use client';

import React, { useState, useEffect } from 'react';

import styles from './CustomCocktailAddRecipe.module.scss';

interface Props {
  recipe: string;
}

const splitedRecipe = (recipe: string) => recipe.split('|').join('\n\n');

export default function CustomCocktailAddRecipe({ recipe }: Props) {
  const [inputValue, setInputValue] = useState(' ');

  useEffect(() => {
    setInputValue(recipe);
  }, [recipe]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div className={styles.title}>레시피</div>
      <textarea
        value={inputValue && splitedRecipe(inputValue)}
        className={styles['input-style']}
        onChange={handleInputChange}
      />
    </div>
  );
}
