import React from 'react';

import Image from 'next/image';
import styles from './IngredientCard.module.scss';

interface Unit {
  id: number;
  name: string;
}

interface Cocktail_Ingredients {
  id: number;
  name: string;
  image: string;
  category_id: number;
  amount: number;
  unit: Unit;
}

interface StoreData {
  id: number;
  name: string;
  // image: string;
  category: {
    id: number;
    name: string;
  };
}

interface Props {
  ingredient: Cocktail_Ingredients;
  index: number;
  lastIndex: number;
  storeData: StoreData[];
}

export default function IngredientCard({
  ingredient,
  index,
  lastIndex,
  storeData,
}: Props) {
  // console.log(storeData);

  let className = '';

  let isStored = '';

  if (
    (index === 0 && index !== lastIndex) ||
    (index === 5 && index !== lastIndex) ||
    (index === 10 && index !== lastIndex)
  ) {
    className = styles['start-ingredient'];
  } else if (
    (index === 0 && index === lastIndex) ||
    (index === 5 && index === lastIndex) ||
    (index === 10 && index === lastIndex)
  ) {
    className = styles['start-last-ingredient'];
  } else if (index === 4 || index === 9 || index === lastIndex) {
    className = styles['last-ingredient'];
  } else {
    className = styles['inner-ingredient'];
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < storeData.length; i++) {
    if (ingredient.id === storeData[i].id) {
      isStored = styles['stored-ingredient'];
      // console.log(ingredient.ingredient.id);
    }
  }

  return (
    <div className={styles.container}>
      <div className={className}>
        <Image
          className={styles['ingredient-img']}
          src={ingredient.image}
          alt="재료 이미지"
          width={20}
          height={20}
        />
        <div className={styles['ingredient-name']}>
          <div className={isStored}>{ingredient.name}</div>
        </div>
      </div>
      <div className={styles.count}>
        <div>{ingredient.amount}</div>
        <div>{ingredient.unit.name}</div>
      </div>
    </div>
  );
}
