'use client';

import { useState } from 'react';

import styles from './LikeCount.module.scss';

interface Props {
  count: number;
}

export default function LikeCount({ count }: Props) {
  const [isLike, setIsLike] = useState(false);
  const heart = () => {
    if (isLike === false) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };
  return (
    <div className={styles.flex}>
      <button type="button" onClick={heart}>
        {isLike === false ? <div>🤍</div> : <div>🖤</div>}
      </button>
      {count}
    </div>
  );
}
