'use client';

import styles from './IngredientsTitle.module.scss';

import IngredientSearchForm from '../common/IngredientSearchForm';

interface IPropsType {
  title: string;
  desc: string;
  placeholder: string;
  isRefr: boolean;
}

export default function IngredientsTitle(props: IPropsType) {
  const { title, desc, placeholder, isRefr } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className={styles.search}>
        <IngredientSearchForm
          placeholder={placeholder}
          type={isRefr ? 'refrigerator' : 'memo'}
        />
      </div>
    </div>
  );
}
