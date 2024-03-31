'use client';

import { useLayoutEffect, useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styles from './FoodArea.module.scss';
import IngredientBlock from '../common/IngredientBlock';
import useRefrigeratorStore from '@/store/refrigeratorStore';

export default function FoodArea() {
  const { refgList, removeRefrList } = useRefrigeratorStore();

  const [foodList, setFoodList] = useState([]);

  useLayoutEffect(() => {
    const onlyFood = refgList.filter(
      (ingredient) => ingredient.category.id !== 1,
    );
    setFoodList(onlyFood);
  }, [refgList]);

  return (
    // <Droppable droppableId="food">
    //   {(droppableProvided) => (
    <div
      className={styles.container}
      // ref={droppableProvided.innerRef}
      // {...droppableProvided.droppableProps}
    >
      <div className={styles['container-outer']}>
        <div className={styles['container-inner']}>
          <div className={styles.inside}>
            {foodList.map((ingredient) => (
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
      <div className={styles.hinges}>
        <div className={styles.hinge} />
        <div className={styles.hinge} />
      </div>
    </div>
    //   )}
    // </Droppable>
  );
}
