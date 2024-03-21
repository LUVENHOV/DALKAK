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
import SearchBlock from './SearchBlock';
import SearchAlcoholContent from './SearchAlcoholContent';
import SearchColor from './SearchColor';
import SortBy from './SortBy';

const baseList = [
  {
    id: '1',
    name: '샴페인',
  },
  {
    id: '2',
    name: '럼',
  },
  {
    id: '3',
    name: '위스키',
  },
  {
    id: '4',
    name: '보드카',
  },
  {
    id: '5',
    name: '진',
  },
  {
    id: '6',
    name: '테킬라',
  },
  {
    id: '7',
    name: '브랜디',
  },
  {
    id: '8',
    name: '리큐어',
  },
  {
    id: '9',
    name: '와인',
  },
  {
    id: '10',
    name: '비터즈',
  },
];
const sweetnessList = [
  {
    id: '1',
    name: '매우 낮음',
  },
  {
    id: '2',
    name: '씁쓸함',
  },
  {
    id: '3',
    name: '보통',
  },
  {
    id: '4',
    name: '달콤함',
  },
  {
    id: '5',
    name: '매우 달콤함',
  },
];

export default function CocktailSearchForm() {
  const [isVisible, setIsVisible] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [base, setBase] = useState('');
  const [alcoholContent, setAlcoholContent] = useState<readonly number[]>([
    15, 35,
  ]);
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

  const handleAlcoholContent = (arr: readonly number[]) => {
    setAlcoholContent(arr);
  };

  const handleColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColor(e.currentTarget.value);
  };

  const handleSweetness = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSweetness(e.currentTarget.value);
  };

  const handleOrderBy = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOrderBy(e.currentTarget.value);
  };

  const handleDetailSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(keyword);
    console.log(ingredients);
    console.log(base);
    console.log(alcoholContent);
    console.log(color);
    console.log(sweetness);
    console.log(orderBy);
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
              <SearchBlock
                list={baseList}
                state={base}
                handleState={handleBase}
              />
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
              <SearchColor color={color} handleColor={handleColor} />
            </div>
            <div className={`${styles.searchRow} ${styles.sweetness}`}>
              <div className={styles.title}>당도</div>
              <SearchBlock
                list={sweetnessList}
                state={sweetness}
                handleState={handleSweetness}
              />
            </div>
            <div className={styles.searchBtn}>
              <BtnWithIcon
                text="적용"
                btnStyle="full-point"
                handleOnClick={handleDetailSearch}
              />
            </div>
          </div>
        ) : null}
        <SortBy orderBy={orderBy} handleOrderBy={handleOrderBy} />
      </div>
    </>
  );
}
