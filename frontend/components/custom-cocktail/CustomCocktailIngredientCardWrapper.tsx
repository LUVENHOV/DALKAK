import CustomCocktailIngredientCard from './CustomCocktailIngredientCard';
import styles from './CustomCocktailIngredientCardWrapper.module.scss';

interface Ingredients {
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

interface StoreData {
  id: number;
  name: string;
  image: string;
  category: {
    id: number;
    name: string;
  };
}

interface Props {
  ingredients: Ingredients[];
  storeData: StoreData[];
}

export default function CustomCocktailIngredientCardWrapper({
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
          <CustomCocktailIngredientCard
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
