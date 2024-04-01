import styles from './IngredientTag.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface ITagType {
  ingredient: IIngredientType;
  type: string;
  handleOnClick: (ingredient: IIngredientType | number) => void;
}

export default function IngredientTag(props: ITagType) {
  const { ingredient, type, handleOnClick } = props;

  const addIngredient = () => {
    if (type === 'refrigerator') {
      handleOnClick(ingredient.id);
    } else {
      handleOnClick(ingredient);
    }
  };

  return (
    <button
      type="button"
      onClick={() => addIngredient()}
      className={styles.container}
    >
      {ingredient.name}
    </button>
  );
}
