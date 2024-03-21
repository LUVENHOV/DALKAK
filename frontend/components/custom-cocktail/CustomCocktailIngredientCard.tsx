import Image, { StaticImageData } from 'next/image';
import React from 'react';

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

interface StoreData {
  id: number;
  name: string;
  image: string | StaticImageData;
  category: {
    id: number;
    name: string;
  };
}

interface Props {
  ingredient: Ingredient;
  index: number;
  lastIndex: number;
  storeData: StoreData[];
}

export default function CustomCocktailIngredientCard({
  ingredient,
  index,
  lastIndex,
  storeData,
}: Props) {
  // console.log(storeData);

  let className = '';

  let isStored = '';

  if (
    (index === 0 && index !== lastIndex)
    || (index === 5 && index !== lastIndex)
    || (index === 10 && index !== lastIndex)
  ) {
    className = styles['start-ingredient'];
  } else if (
    (index === 0 && index === lastIndex)
    || (index === 5 && index === lastIndex)
    || (index === 10 && index === lastIndex)
  ) {
    className = styles['start-last-ingredient'];
  } else if (index === 4 || index === 9 || index === lastIndex) {
    className = styles['last-ingredient'];
  } else {
    className = styles['inner-ingredient'];
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < storeData.length; i++) {
    if (ingredient.ingredient.id === storeData[i].id) {
      isStored = styles['stored-ingredient'];
      console.log(ingredient.ingredient.id);
    }
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
          <div className={isStored}>{ingredient.ingredient.name}</div>
        </div>
      </div>
      <div className={styles.count}>
        <div>{ingredient.ingredient_amount}</div>
        <div>{ingredient.unit.name}</div>
      </div>
    </div>
  );
}
