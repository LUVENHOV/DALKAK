import { Droppable } from '@hello-pangea/dnd';

import AlcoholArea from './AlcoholArea';
import FoodArea from './FoodArea';
import styles from './RefridgeratorContainer.module.scss';

export default function RefridgeratorContainer() {
  return (
    <Droppable droppableId="refr" key="refr">
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={styles['food-area']}>
            <FoodArea />
          </div>
          <div className={styles['alcohol-area']}>
            <AlcoholArea />
          </div>
        </div>
      )}
    </Droppable>
  );
}
