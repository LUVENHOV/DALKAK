import React from 'react';
import styles from './CustomCocktailIngredientCardWrapper.module.scss';

import CustomCocktailToolCard from './CustomCocktailToolCard';

interface CocktailTools {
  id: number;
  name: string;
  image: string;
}

interface Props {
  cocktailTools: CocktailTools[];
}

export default function CustomCocktailToolCardWrapper({
  cocktailTools,
}: Props) {
  const lastIndex = cocktailTools.length - 1;

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.title}>도구</div>
      </div>
      <ul className={styles['grid-container']}>
        {cocktailTools.map((tool, index) => (
          <CustomCocktailToolCard
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            cocktailTool={tool}
            index={index}
            lastIndex={lastIndex}
          />
        ))}
      </ul>
    </div>
  );
}
