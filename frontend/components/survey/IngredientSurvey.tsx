import React from 'react';
import styles from '../cocktail-list/CocktailSearchForm.module.scss';
import IngredientBlock from '../common/IngredientBlock';
import IngredientSearchForm from '../common/IngredientSearchForm';
// import useSearchStore from '@/store/searchStore';
import surveyStore from '@/store/surveyStore';
import './IngredientSurvey.scss';

function IngredientSurvey() {
  const ingredients = surveyStore((state) => state.surveyIngredients);
  return (
    <div className="ingredient-wrapper">
      <div className={`${styles.content} ${styles['ingredients-container']}`}>
        <IngredientSearchForm
          placeholder="넣고 싶지 않은 재료를 검색해주세요"
          type="survey"
        />
        <div className={styles['selected-container']}>
          {ingredients?.map((ingredient) => (
            // eslint-disable-next-line react/jsx-indent
            <IngredientBlock
              key={ingredient.id}
              type="survey"
              ingredient={ingredient}
            />
            // eslint-disable-next-line indent
          ))}
        </div>
      </div>
    </div>
  );
}
export default IngredientSurvey;
