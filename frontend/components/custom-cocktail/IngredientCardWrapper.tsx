import IngredientCard from './IngredientCard';

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

interface Custom_Ingredients {
  ingredient: {
    id: number;
    name: string;
    image: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

type IngredientType = Cocktail_Ingredients | Custom_Ingredients;

interface Props<T extends IngredientType> {
  ingredients: T[];
}

export default function IngredientCardWrapper<T extends IngredientType>({
  ingredients,
}: Props<T>) {
  // const lastIndex =
  //   ingredients && ingredients.length > 0 ? ingredients.length - 1 : 0;

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.title}>재료</div>
        <div className={styles.info}>
          냉장고에 있는 재료는 이름에 색이 칠해져요
        </div>
      </div>
      <ul className={styles['grid-container']}>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <IngredientCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              ingredient={ingredient}
              // index={index}
              // lastIndex={lastIndex}
            />
          ))
        ) : (
          <div>재료없음</div>
        )}
      </ul>
    </div>
  );
}
