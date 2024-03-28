'use client';

import { ChangeEvent, useState, useMemo, useCallback } from 'react';
import { debounce } from 'lodash';
import styles from './IngredientSearchForm.module.scss';
import IngredientTag from './IngredientTag';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface IPropsType {
  placeholder: string;
  handleOnClick: (ingredient: IIngredientType) => void;
}

export default function SearchIngredient(props: IPropsType) {
  const { placeholder, handleOnClick } = props;
  const [keyword, setKeyword] = useState('');
  const [resultList, setResultList] = useState([]);

  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';

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
              handleOnClick={handleOnClick}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
