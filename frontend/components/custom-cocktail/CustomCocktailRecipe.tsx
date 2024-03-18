import styles from './CustomCocktailRecipe.module.scss';

interface Props {
  recipe: string;
}

export default function CustomCocktailRecipe({ recipe }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>레시피</div>
      {recipe.split('|').map((line, index) => (
        <div className={styles.recipe} key={index}>
          {line}
        </div>
      ))}
    </div>
  );
}
