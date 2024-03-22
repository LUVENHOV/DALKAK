'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './CustomCocktailAddRecipe.module.scss';

interface Props {
  recipe: string;
}

const splitedRecipe = (recipe: string) => recipe.split('|').join('\n\n');

// console.log(splitedRecipe);

export default function CustomCocktailAddRecipe({ recipe }: Props) {
  const pathname = usePathname();
  console.log(pathname);
  const [inputValue, setInputValue] = useState(recipe);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div className={styles.title}>레시피</div>
      <textarea
        value={splitedRecipe(inputValue)}
        className={styles['input-style']}
        onChange={handleInputChange}
      />
    </div>
  );
}
