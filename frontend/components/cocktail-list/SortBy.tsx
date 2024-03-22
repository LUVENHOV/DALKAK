'use client';

import React from 'react';
import styles from './SortBy.module.scss';

interface propsType {
  orderBy: string;
  handleOrderBy: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const sortingList = [
  {
    id: '3',
    text: '이름 오름차순',
  },
  {
    id: '4',
    text: '이름 내림차순',
  },
  {
    id: '2',
    text: '좋아요 오름차순',
  },
  {
    id: '1',
    text: '좋아요 내림차순',
  },
];

export default function SortBy(props: propsType) {
  const { orderBy, handleOrderBy } = props;

  return (
    <div className={styles.container}>
      {sortingList.map((sort, idx: number) => (
        <div key={sort.id}>
          <button
            type="button"
            value={sort.id}
            className={sort.id === orderBy ? styles.selected : ''}
            onClick={(e) => handleOrderBy(e)}
          >
            {sort.text}
          </button>
          {idx !== 3 ? '\u00A0\u00A0|\u00A0\u00A0' : null}
        </div>
      ))}
    </div>
  );
}
