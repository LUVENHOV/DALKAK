import AlcoholArea from './AlcoholArea';
import FoodArea from './FoodArea';
import styles from './RefridgeratorContainer.module.scss';

export default function RefridgeratorContainer() {
  return (
    <div className={styles.container}>
      <div className={styles['food-area']}>
        <FoodArea />
      </div>
      <div className={styles['alcohol-area']}>
        <AlcoholArea />
      </div>
    </div>
  );
}
