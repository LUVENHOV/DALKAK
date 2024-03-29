'use client';

import styles from './MemoRow.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface IPropsType {
  ingredient: IIngredientType;
  handleOnClick: (ingredient: IIngredientType) => void;
}

export default function MemoRow(props: IPropsType) {
  const { ingredient, handleOnClick } = props;

  return (
    <div className={styles.container}>
      <div className={styles.name}>{ingredient.name}</div>
      <div className={styles.line} />
      <button
        type="button"
        className={styles.delete}
        onClick={() => handleOnClick(ingredient)}
      >
        삭제
      </button>
    </div>
  );
}
