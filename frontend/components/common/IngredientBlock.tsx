import Image from 'next/image';
import styles from './IngredientBlock.module.scss';
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
