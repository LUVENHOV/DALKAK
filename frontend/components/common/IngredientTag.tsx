import styles from './IngredientTag.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface ITagType {
  ingredient: IIngredientType;
  handleOnClick: (ingredient: IIngredientType) => void;
}

export default function IngredientTag(props: ITagType) {
  const { ingredient, handleOnClick } = props;

  return (
    <button
      type="button"
      onClick={() => handleOnClick(ingredient)}
      className={styles.container}
    >
      {ingredient.name}
    </button>
  );
}
