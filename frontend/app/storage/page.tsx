'use client';

import { DragDropContext } from '@hello-pangea/dnd';

import styles from './refrigerator.module.scss';

import AboveRefridgerator from '@/components/store/AboveRefridgerator';
import MemoContainer from '@/components/store/MemoContainer';
import RefridgeratorContainer from '@/components/store/RefridgeratorContainer';
import useRefrigeratorStore from '@/store/refrigeratorStore';
import { useEffect } from 'react';

export default function Page() {
  const { setRefgList, setMemoList, memoToRefr, refrToMemo } =
    useRefrigeratorStore();

  useEffect(() => {
    setRefgList();
    setMemoList();
  }, [setRefgList, setMemoList]);

  /** 재료를 드래그 해서 옮길 때 실행되는 함수 */
  const onDragEnd = ({ source, destination }) => {
    if (!destination || source.droppableId === destination.droppableId) {
      return;
    }

    console.log(source, destination);
    if (destination.droppableId === 'refr') {
      console.log('냉장고로 옮겨');
      memoToRefr(source.index);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles['refrigerator-container']}>
          <AboveRefridgerator />
          <RefridgeratorContainer />
        </div>
        <div className={styles['memo-container']}>
          <MemoContainer />
        </div>
      </div>
    </DragDropContext>
  );
}
