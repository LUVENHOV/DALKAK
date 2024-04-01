'use client';

import { useMemo } from 'react';
import styles from './AlcoholArea.module.scss';
import IngredientBlock from '../common/IngredientBlock';
import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function AlcoholArea() {
  const { refgList, removeRefrList } = useRefrigeratorStore();
  const alcoholList = useMemo(
    () => refgList.filter((ingredient) => ingredient.category.id === 1),
    [refgList],
  );

  return (
    <div className={styles['container-outer']}>
      <div className={styles['container-inner']}>
        <div className={styles.inside}>
          {alcoholList.map((ingredient) => (
            <IngredientBlock
              key={ingredient.id}
              ingredient={ingredient}
              handleOnClick={removeRefrList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
