import IngredientCardApiTest from './IngredientCardApiTest';

import styles from './IngredientCardWrapper.module.scss';

interface Unit {
  id: number;
  name: string;
}

interface Cocktail_Ingredients {
  id: number;
  name: string;
  image: string;
  category_id: number;
  amount: number;
  unit: Unit;
}

interface StoreData {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
}

interface Props {
  ingredients: Cocktail_Ingredients[];
  storeData: StoreData[];
}

export default function IngredientCardWrapper({
  ingredients,
  storeData,
}: Props) {
  const lastIndex = ingredients.length - 1;

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.title}>재료</div>
        <div className={styles.info}>
          냉장고에 있는 재료는 이름에 색이 칠해져요
        </div>
      </div>
      <ul className={styles['grid-container']}>
        {ingredients.map((ingredient, index) => (
          <IngredientCardApiTest
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            ingredient={ingredient}
            index={index}
            lastIndex={lastIndex}
            storeData={storeData}
          />
        ))}
      </ul>
    </div>
  );
}
