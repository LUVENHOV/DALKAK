import React from 'react';

import styles from './page.module.scss';

import CustomCocktailImageUpload from '@/components/custom-cocktail/write/CustomCocktailImageUpload';

import CustomCocktailInput from '@/components/custom-cocktail/write/CustomCocktailInput';

import CustomCocktailAddIngredient from '@/components/custom-cocktail/write/CustomCocktailAddIngredient';

import CustomCocktailAddRecipe from '@/components/custom-cocktail/write/CustomCocktailAddRecipe';
import { StaticImageData } from 'next/image';

interface IngredientsList {
  ingredient: {
    id: number;
    name: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface OriginIngredient {
  ingredientList: IngredientsList[];
}

const originIngredientList: OriginIngredient = {
  ingredientList: [
    {
      ingredient: {
        id: 1,
        name: '사과',
      },
      ingredient_amount: 50,
      unit: {
        id: 1,
        name: '조각',
      },
    },
    {
      ingredient: {
        id: 2,
        name: '레몬',
      },
      ingredient_amount: 3,
      unit: {
        id: 2,
        name: '슬라이스',
      },
    },
    {
      ingredient: {
        id: 3,
        name: '얼음',
      },
      ingredient_amount: 100,
      unit: {
        id: 3,
        name: '그램',
      },
    },
    {
      ingredient: {
        id: 4,
        name: '레몬 리큐르',
      },
      ingredient_amount: 5,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 5,
        name: '사과 리큐르',
      },
      ingredient_amount: 15,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 6,
        name: '쿠앵트로',
      },
      ingredient_amount: 15,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 7,
        name: '보드카',
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
  ],
};

const origin: IngredientsList[] = originIngredientList.ingredientList;

export default function Page() {
  return (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>
            활용한 칵테일
            <span className={styles['divide-line']}>&nbsp;&nbsp;&nbsp;|</span>
          </div>

          <div className={styles.explain}>
            &nbsp;&nbsp;Apple Martini, 애플 마티니
          </div>
          <div></div>

          <div className={styles.buttons}>
            <div className={styles.button}>
              <button>나만 보기</button>
            </div>

            <div className={styles.button}>
              <button>커스텀 칵테일 등록</button>
            </div>
          </div>
        </div>

        <hr className={styles.hr} />
        <div className={styles['inner-container']}>
          <div className={styles.space}>
            <CustomCocktailImageUpload />
            <div className={styles['input-container']}>
              <div className={styles.inputs}>
                <CustomCocktailInput />
              </div>
              <div className={styles.inputs}>
                <CustomCocktailInput />
              </div>
              <div className={styles.inputs}>
                <CustomCocktailInput />
              </div>
            </div>
          </div>
          <div className={styles.space}>
            <CustomCocktailAddIngredient origin={origin} />
            <CustomCocktailAddRecipe />
          </div>
        </div>
      </div>
    </div>
  );
}
