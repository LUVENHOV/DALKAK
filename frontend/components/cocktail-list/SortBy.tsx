'use client';

import React, { useState } from 'react';
import styles from './SortBy.module.scss';

export default function SortBy() {
  const [selected, setSelected] = useState(0);

  const sortingList = [
    {
      text: '이름 오름차순',
      sortBy: 3,
    },
    {
      text: '이름 내림차순',
      sortBy: 4,
    },
    {
      text: '좋아요 오름차순',
      sortBy: 2,
    },
    {
      text: '좋아요 내림차순',
      sortBy: 1,
    },
  ];

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sortBy: number,
  ) => {
    setSelected(sortBy);
    console.log(sortBy);
    console.log(e.target);
  };

  return (
    <div className={styles.container}>
      {sortingList.map((sort, idx: number) => (
        <div key={sort.sortBy}>
          <button
            className={selected === idx + 1 ? styles.selected : ''}
            onClick={(e) => handleOnClick(e, idx + 1)}
          >
            {sort.text}
            {idx != 3 ? '\u00A0\u00A0|\u00A0\u00A0' : null}
          </button>
        </div>
      ))}
    </div>
  );
}
