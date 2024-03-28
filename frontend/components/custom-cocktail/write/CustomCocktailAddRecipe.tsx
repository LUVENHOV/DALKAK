'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';

import styles from './CustomCocktailAddRecipe.module.scss';

interface Props {
  recipe: string;
  inputValue: string;
  handleInputChange: ChangeEvent;
  splitedRecipe: string;
}

// const splitedRecipe = (recipe: string) => recipe.split('|').join('\n\n');

export default function CustomCocktailAddRecipe({
  handleInputChange,
  recipe,
  inputValue,
  splitedRecipe,
}: Props) {
  // const [inputValue, setInputValue] = useState(' ');

  // useEffect(() => {
  //   setInputValue(recipe);
  // }, [recipe]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setInputValue(e.target.value);
  // };
  return (
    <div>
      <div className={styles.title}>레시피</div>
      <textarea
        value={splitedRecipe}
        className={styles['input-style']}
        onChange={handleInputChange}
      />
    </div>
  );
}
