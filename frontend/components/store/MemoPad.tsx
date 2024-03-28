'use client';

import styles from './MemoPad.module.scss';
import MemoRow from './MemoRow';

import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function MemoPad() {
  const { memoList, removeMemoList } = useRefrigeratorStore();

  return (
    <div className={styles.container}>
      {memoList.map((ingredient) => (
        <div key={ingredient.id}>
          <MemoRow ingredient={ingredient} handleOnClick={removeMemoList} />
        </div>
      ))}
    </div>
  );
}
