// 'use client';

import React from 'react';

import Link from 'next/link';

import styles from './CocktailDetailApiTest.module.scss';
import BtnWithIcon from '@/components/common/BtnWithIcon';

import LikeCount from '@/components/common/LikeCount';

import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';

import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe';

import IngredientCardWrapperApiTest from '@/components/custom-cocktail/IngredientCardWrapperApiTest';
import ToolCardWrapper from '@/components/custom-cocktail/ToolCardWrapper';

interface Unit {
  id: number;
  name: string;
}

interface Cocktail_Ingredients {
  id: number;
  name: string;
  image: string;
  category_id: number;
  amount: number;
  unit: Unit;
}

interface Cocktail_Tools {
  id: number;
  name: string;
  image: string;
}

interface Custom_Cocktails {
  custom_id: number;
  custom_name: string;
  custom_summary: string;
  user_id: number;
  user_nickname: string;
}

interface Data {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
  view_count: number;
  alcohol_content: number;
  sweetness: number;
  recipe: string;
  cocktail_ingredients: Cocktail_Ingredients[];
  cocktail_tools: Cocktail_Tools[];
  custom_cocktails: Custom_Cocktails[];
}

interface ApiResponse {
  code: number;
  messages: string[];
  data: Data;
}

interface Ingredient {
  id: number;
  name: string;

  category: {
    id: number;
    name: string;
  };
}

interface StoreData {
  ingredients: Ingredient[];
}
const storeData: StoreData = {
  ingredients: [
    {
      id: 2,
      name: '레몬',

      category: {
        id: 2,
        name: 'fruit',
      },
    },
    {
      id: 3,
      name: '얼음',

      category: {
        id: 3,
        name: 'beverage',
      },
    },
    {
      id: 7,
      name: '보드카',

      category: {
        id: 1,
        name: 'alcohol',
      },
    },
    {
      id: 8,
      name: '어쩌고',

      category: {
        id: 1,
        name: 'alcohol',
      },
    },
  ],
};
const storeList = storeData.ingredients;

interface Props {
  cocktailId: string;
}

export async function getData({ cocktailId }: Props) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_KEY + `/cocktails/${cocktailId}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  } else {
    const data: ApiResponse = await response.json();
    return data.data;
  }
}

export default async function CocktailDetailApiTest({ cocktailId }: Props) {
  const cocktailDetailData = await getData({ cocktailId });
  const cocktailIngredients: Cocktail_Ingredients[] =
    cocktailDetailData.cocktail_ingredients;
  console.log(cocktailDetailData);
  return (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{cocktailDetailData.name}</div>

          <div className={styles.nickname}>
            <LikeCount count={245} />
            <div className={styles.info}>
              도수{cocktailDetailData.alcohol_content}
            </div>
            <div className={styles.info}>
              당도{cocktailDetailData.sweetness}
            </div>
          </div>
          <div />
          <div className={styles.buttons}>
            <Link href="/cocktail/custom/write/1">
              <BtnWithIcon text="커스텀 레시피 만들기" btnStyle="full-point" />
            </Link>
          </div>
        </div>

        <hr className={styles.hr} />
        <div className={styles['inner-container']}>
          <div className={styles.space}>
            <CustomCocktailImage customImage={cocktailDetailData.image} />
          </div>
          <div className={styles.space}>
            <IngredientCardWrapperApiTest
              ingredients={cocktailIngredients}
              storeData={storeList}
            />
            <ToolCardWrapper
              cocktailTools={cocktailDetailData.cocktail_tools}
            />
            <CustomCocktailRecipe recipe={cocktailDetailData.recipe} />
          </div>
        </div>

        {/* <hr className={styles.hr2} /> */}
        {/* <div className={styles.flex}>
          <div className={styles.title}>커스텀 칵테일</div>
          <div className={styles.all}>전체보기</div>
        </div> */}
        {/* <div>
          <CustomCocktailCardWrapper dummy={cocktailDetailData.custom_cocktails} />
        </div> */}
      </div>
    </div>
  );
  // );
}
