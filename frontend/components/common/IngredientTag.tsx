import styles from './IngredientTag.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

type AddItemFunction = (id: number, name: string) => void;

interface ITagType {
  ingredient: IIngredientType;
  handleOnClick: (ingredient: IIngredientType) => void;
  // eslint-disable-next-line react/require-default-props
  addItem?: AddItemFunction;
}

export default function IngredientTag(props: ITagType) {
  const { ingredient, handleOnClick, addItem } = props;

  return (
    <div>
      {/* <button type="button" onClick={confirmData}>
        재료확인
      </button> */}
      {addItem ? (
        <button
          type="button"
          onClick={() => addItem(ingredient.id, ingredient.name)}
          className={styles.container}
        >
          {ingredient.name}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleOnClick(ingredient)}
          className={styles.container}
        >
          {ingredient.name}
        </button>
      )}
    </div>
  );
}
