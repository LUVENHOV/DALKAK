'use client';

import { Droppable } from '@hello-pangea/dnd';

import styles from './MemoPad.module.scss';
import MemoRow from './MemoRow';

import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function MemoPad() {
  const { memoList, removeMemoList } = useRefrigeratorStore();

  return (
    <Droppable droppableId="memo" key="memo">
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {memoList.map((ingredient, index) => (
            <MemoRow
              key={ingredient.id}
              index={index}
              ingredient={ingredient}
              handleOnClick={removeMemoList}
            />
          ))}
        </div>
      )}
    </Droppable>
  );
}
