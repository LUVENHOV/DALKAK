import { StaticImageData } from 'next/image';
import React from 'react';

import Image from 'next/image';
import styles from './CustomCocktailIngredientCard.module.scss';

interface Ingredient {
  ingredient: {
    id: number;
    name: string;
    image: string | StaticImageData;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface Props {
  ingredient: Ingredient;
  index: number;
  lastIndex: number;
}

export default function CustomCocktailIngredientCard({
  ingredient,
  index,
  lastIndex,
}: Props) {
  let className = '';

  if (index == 0 || index == 5 || index === 10) {
    className = styles['start-ingredient'];
  } else if (index === 4 || index === 11 || index === lastIndex) {
    className = styles['last-ingredient'];
  } else {
    className = styles['inner-ingredient'];
  }

  return (
    <div className={styles.container}>
      <div className={className}>
        <Image
          className={styles['ingredient-img']}
          src={ingredient.ingredient.image}
          alt="재료 이미지"
        />
        <div className={styles['ingredient-name']}>
          {ingredient.ingredient.name}
        </div>
      </div>
      <div className={styles.count}>
        <div>{ingredient.ingredient_amount}</div>
        <div>{ingredient.unit.name}</div>
      </div>
    </div>
  );
}
