'use client';

import { Draggable } from '@hello-pangea/dnd';

import styles from './MemoRow.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface IPropsType {
  index: number;
  ingredient: IIngredientType;
  handleOnClick: (ingredient: number) => void;
}

export default function MemoRow(props: IPropsType) {
  const { ingredient, handleOnClick } = props;

  return (
    <Draggable
      draggableId={ingredient.id.toString()}
      key={600 + ingredient.id}
      index={ingredient.id}
    >
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.line} />
          <button
            type="button"
            className={styles.delete}
            onClick={() => handleOnClick(ingredient.id)}
          >
            삭제
          </button>
        </div>
      )}
    </Draggable>
  );
}
