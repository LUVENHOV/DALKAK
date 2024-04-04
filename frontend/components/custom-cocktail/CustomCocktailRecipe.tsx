import React from 'react';

import styles from './CustomCocktailRecipe.module.scss';

interface Props {
  recipe: string;
}

export default function CustomCocktailRecipe({ recipe }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>레시피</div>
      {recipe.split('|').map((line, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.recipe} key={index}>
          {line}
        </div>
      ))}
    </div>
  );
}
