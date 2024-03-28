import styles from './IngredientsTitle.module.scss';

import IngredientSearchForm from '../common/IngredientSearchForm';

interface IPropsType {
  title: string;
  desc: string;
  placeholder: string;
}

export default function IngredientsTitle(props: IPropsType) {
  const { title, desc, placeholder } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <IngredientSearchForm
        placeholder={placeholder}
        handleOnClick={async () => {
          'use server';

          console.log('asdf');
        }}
      />
    </div>
  );
}
