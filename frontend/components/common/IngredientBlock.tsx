import Image from 'next/image';
import styles from './IngredientBlock.module.scss';
import { IIngredientType } from '@/type/refrigeratorTypes';

interface ITagType {
  ingredient: IIngredientType;
  handleOnClick: (ingredient: IIngredientType | number) => void;
}

export default function IngredientBlock(props: ITagType) {
  const { ingredient, handleOnClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => handleOnClick}
      className={styles.container}
      onKeyDown={() => {}}
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
    </div>
  );
}
