import Image from 'next/image';
import styles from './IngredientBlock.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface ITagType {
  ingredient: IIngredientType;
  searchType: string;
  handleOnClick: (ingredient: IIngredientType | number) => void;
}

export default function IngredientBlock(props: ITagType) {
  const { ingredient, searchType, handleOnClick } = props;

  const deleteIngredient = () => {
    if (searchType === 'refrigerator') {
      handleOnClick(ingredient.id);
    } else {
      handleOnClick(ingredient);
    }
  };

  return (
    <button
      type="button"
      onClick={deleteIngredient}
      className={styles.container}
    >
      <div className={styles['title-wrapper']}>{ingredient.name}</div>
      <div className={styles['image-wrapper']}>
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={100}
          height={100}
        />
      </div>
    </button>
  );
}
