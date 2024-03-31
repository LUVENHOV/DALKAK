'use client';

import { useLayoutEffect, useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styles from './AlcoholArea.module.scss';
import IngredientBlock from '../common/IngredientBlock';
import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function AlcoholArea() {
  const { refgList, removeRefrList } = useRefrigeratorStore();

  const [alcoholList, setAlcoholList] = useState([]);

  useLayoutEffect(() => {
    const onlyAlcohol = refgList.filter(
      (ingredient) => ingredient.category.id === 1,
    );
    setAlcoholList(onlyAlcohol);
  }, [refgList]);

  return (
    // <Droppable droppableId="alcohol">
    //   {(droppableProvided) => (
    <div
      className={styles['container-outer']}
      // ref={droppableProvided.innerRef}
      // {...droppableProvided.droppableProps}
    >
      <div className={styles['container-inner']}>
        <div className={styles.inside}>
          {alcoholList.map((ingredient) => (
            <Draggable
              draggableId={ingredient.id.toString()}
              key={ingredient.id}
              index={ingredient.id}
            >
              {(draggableProvided) => (
                <div
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                >
                  <IngredientBlock
                    key={ingredient.id}
                    ingredient={ingredient}
                    searchType="refrigerator"
                    handleOnClick={removeRefrList}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </div>
      </div>
    </div>
    //   )}
    // </Droppable>
  );
}
