'use client';

import { ChangeEvent, useState, useMemo, useCallback } from 'react';
import { debounce } from 'lodash';
import styles from './IngredientSearchForm.module.scss';
import IngredientTag from './IngredientTag';
import useRefrigeratorStore from '@/store/refrigeratorStore';
import useSearchStore from '@/store/searchStore';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface IPropsType {
  placeholder: string;
  type: string;
}

export default function IngredientSearchForm(props: IPropsType) {
  const { placeholder, type } = props;
  const [keyword, setKeyword] = useState('');
  const [resultList, setResultList] = useState([]);
  const { addRefrList, addMemoList } = useRefrigeratorStore();
  const { addIngredient } = useSearchStore();

  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

  const getIngredientList = async (k: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/ingredients?ingredient-name='${k}'`,
      {
        headers: { authorization },
      },
    );
    const json = await res.json();
    return (await json).data;
  };

  const getList = useCallback(async (k: string) => {
    setResultList(await getIngredientList(k));
  }, []);

  const debouncedGetList = useMemo(
    () => debounce((k: string) => getList(k), 700),
    [getList],
  );

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debouncedGetList(e.target.value);
  };

  const handleOnClick = (ingredient: IIngredientType | number) => {
    if (type === 'search' && typeof ingredient !== 'number') {
      addIngredient(ingredient);
    } else if (type === 'refrigerator' && typeof ingredient === 'number') {
      addRefrList(ingredient);
    } else if (type === 'memo' && typeof ingredient === 'number') {
      addMemoList(ingredient);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder={placeholder}
      />
      {resultList ? (
        <div className={styles['results-container']}>
          {resultList.map((ingredient: IIngredientType) => (
            <IngredientTag
              key={ingredient.id}
              ingredient={ingredient}
              type={type}
              handleOnClick={handleOnClick}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
