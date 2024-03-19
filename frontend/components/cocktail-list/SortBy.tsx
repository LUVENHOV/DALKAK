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
        <>
          <button
            className={selected === idx + 1 ? styles.selected : ''}
            key={sort.text}
            onClick={(e) => handleOnClick(e, idx + 1)}
          >
            {sort.text}
          </button>
          {idx != 3 ? <div className={styles.division}>|</div> : null}
        </>
      ))}
    </div>
  );
}
