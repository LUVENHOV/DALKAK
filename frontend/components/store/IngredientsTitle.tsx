'use client';

import styles from './IngredientsTitle.module.scss';

import IngredientSearchForm from '../common/IngredientSearchForm';
import useRefrigeratorStore from '@/store/refrigeratorStore';

interface IPropsType {
  title: string;
  desc: string;
  placeholder: string;
  isRefr: boolean;
}

export default function IngredientsTitle(props: IPropsType) {
  const { title, desc, placeholder, isRefr } = props;
  const { addRefrList, addMemoList } = useRefrigeratorStore();

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className={styles.search}>
        <IngredientSearchForm
          placeholder={placeholder}
          handleOnClick={isRefr ? addRefrList : addMemoList}
        />
      </div>
    </div>
  );
}
