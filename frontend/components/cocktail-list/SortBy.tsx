'use client';

import React from 'react';
import styles from './SortBy.module.scss';
import useSearchStore from '@/store/searchStore';

const sortingList = [
  {
    id: 3,
    text: '좋아요 오름차순',
  },
  {
    id: 4,
    text: '좋아요 내림차순',
  },
  {
    id: 1,
    text: '이름 오름차순',
  },
  {
    id: 2,
    text: '이름 내림차순',
  },
];

export default function SortBy() {
  const { orderBy, setOrderBy, setActivateSearch } = useSearchStore();
  const handleOnClick = (id: number) => {
    setOrderBy(id);
    setActivateSearch();
  };

  return (
    <div className={styles.container}>
      {sortingList.map((sort, idx: number) => (
        <div key={sort.id}>
          <button
            type="button"
            value={sort.id}
            className={sort.id === orderBy ? styles.selected : ''}
            onClick={() => handleOnClick(sort.id)}
          >
            {sort.text}
          </button>
          {idx !== 3 ? '\u00A0\u00A0|\u00A0\u00A0' : null}
        </div>
      ))}
    </div>
  );
}
