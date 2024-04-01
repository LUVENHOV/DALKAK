'use client';

import React from 'react';

import Image from 'next/image';
import styles from './IngredientCard.module.scss';
import useRefrigeratorStore from '@/store/refrigeratorStore';

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

interface Custom_Ingredients {
  ingredient: {
    id: number;
    name: string;
    image: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

type IngredientType = Cocktail_Ingredients | Custom_Ingredients;

interface Props<T extends IngredientType> {
  ingredient: T;
  index: number;
  lastIndex: number;
}

export default function IngredientCard<T extends IngredientType>({
  ingredient,
  index,
  lastIndex,
}: Props<T>) {
  const { refgList } = useRefrigeratorStore();

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
  for (let i = 0; i < refgList.length; i++) {
    if (
      (ingredient as Cocktail_Ingredients)?.id === refgList[i].id ||
      (ingredient as Custom_Ingredients)?.ingredient?.id === refgList[i].id
    ) {
      isStored = styles['stored-ingredient'];
    }

    // console.log((ingredient as Cocktail_Ingredients)?.id);
    // console.log('스토어데이터');
    // console.log(storeData[i].id);
  }

  return (
    <div className={styles.container}>
      <div className={className}>
        <Image
          className={styles['ingredient-img']}
          src={
            (ingredient as Cocktail_Ingredients)?.image ||
            (ingredient as Custom_Ingredients)?.ingredient?.image
          }
          alt="재료 이미지"
          width={20}
          height={20}
        />
        <div className={styles['ingredient-name']}>
          <div className={isStored}>
            {(ingredient as Cocktail_Ingredients)?.name ||
              (ingredient as Custom_Ingredients)?.ingredient.name}
          </div>
        </div>
      </div>
      <div className={styles.count}>
        <div>
          {(ingredient as Cocktail_Ingredients)?.amount ||
            (ingredient as Custom_Ingredients)?.ingredient_amount}
        </div>
        <div>{ingredient.unit.name}</div>
      </div>
    </div>
  );
}
