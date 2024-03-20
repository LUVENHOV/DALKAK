'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './CocktailSearchForm.module.scss';
import {
  Search,
  KeyboardArrowUp,
  KeyboardArrowDown,
  Replay,
} from '@mui/icons-material';
import BtnWithIcon from '../common/BtnWithIcon';
import SearchBase from './SearchBase';
import SearchAlcoholContent from './SearchAlcoholContent';

export default function CocktailSearchForm() {
  const [isVisible, setIsVisible] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [base, setBase] = useState('');
  const [alcoholContent, setAlcoholContent] = useState<number[]>([15, 35]);
  const [color, setColor] = useState('');
  const [sweetness, setSweetness] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setKeyword('');
    setIngredients([]);
    setBase('');
    setAlcoholContent([15, 35]);
    setColor('');
    setSweetness('');
    setOrderBy('');
  };

  const handleBase = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBase(e.currentTarget.value);
  };

  const handleAlcoholContent = (arr: number[]) => {
    setAlcoholContent(arr);
  };

  return (
    <>
      <div className={styles['keyword-search-container']}>
        <input
          type="text"
          placeholder="어떤 칵테일을 찾으시나요?"
          name="keyword"
          onChange={(e) => handleKeyword(e)}
        />
        <button type="submit" onClick={() => console.log(keyword)}>
          <Search />
        </button>
      </div>

      <div className={styles['detail-search-container']}>
        <button
          type="button"
          className={styles.header}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <>
              상세 검색 접기
              <KeyboardArrowUp />
            </>
          ) : (
            <>
              상세 검색
              <KeyboardArrowDown />
            </>
          )}
        </button>
        {isVisible ? (
          <div className={styles.body}>
            <div className={styles.reset}>
              <BtnWithIcon
                icon={Replay}
                text="초기화"
                btnStyle="empty-light"
                handleOnClick={handleReset}
              />
            </div>
            <div className={`${styles.searchRow} ${styles.ingredients}`}>
              <div className={styles.title}>재료</div>
              <div>재료 검색창 ~~~~~</div>
            </div>
            <div className={`${styles.searchRow} ${styles.base}`}>
              <div className={styles.title}>베이스</div>
              <SearchBase base={base} handleBase={handleBase} />
            </div>
            <div className={`${styles.searchRow} ${styles.alcoholContent}`}>
              <div className={styles.title}>도수</div>
              <SearchAlcoholContent
                alcoholContent={alcoholContent}
                handleAlcoholContent={handleAlcoholContent}
              />
            </div>
            <div className={`${styles.searchRow} ${styles.color}`}>
              <div className={styles.title}>색상</div>
              <div>색상 설정 ~~~~~</div>
            </div>
            <div className={`${styles.searchRow} ${styles.sweetness}`}>
              <div className={styles.title}>당도</div>
              <div>당도 설정 ~~~~~</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
