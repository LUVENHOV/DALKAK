'use client';

import { useMemo } from 'react';
import styles from './FoodArea.module.scss';
import IngredientBlock from '../common/IngredientBlock';
import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function FoodArea() {
  const { refgList, removeRefrList } = useRefrigeratorStore();
  const foodList = useMemo(
    () => refgList.filter((ingredient) => ingredient.category.id !== 1),
    [refgList],
  );

  return (
    <div className={styles.container}>
      <div className={styles['container-outer']}>
        <div className={styles['container-inner']}>
          <div className={styles.inside}>
            {foodList.map((ingredient) => (
              <IngredientBlock
                key={ingredient.id}
                ingredient={ingredient}
                handleOnClick={removeRefrList}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.hinges}>
        <div className={styles.hinge} />
        <div className={styles.hinge} />
      </div>
    </div>
  );
}
