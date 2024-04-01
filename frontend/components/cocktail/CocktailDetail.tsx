import React from 'react';

import Link from 'next/link';

import styles from './CocktailDetail.module.scss';
import BtnWithIcon from '@/components/common/BtnWithIcon';

import LikeCount from '@/components/common/LikeCount';

import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';

import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe';

import IngredientCardWrapper from '@/components/custom-cocktail/IngredientCardWrapper';
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
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface Data {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
  heart: boolean;
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
      id: 270,
      name: '라임',

      category: {
        id: 2,
        name: 'fruit',
      },
    },
    {
      id: 435,
      name: '얼음',
      category: {
        id: 3,
        name: 'beverage',
      },
    },
    {
      id: 187,
      name: '앱솔루트 보드카',
      category: {
        id: 1,
        name: 'alcohol',
      },
    },
  ],
};
const storeList = storeData.ingredients;

interface Props {
  cocktailId: number;
}

const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

export async function getData({ cocktailId }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/${cocktailId}`,
    {
      headers: {
        Authorization: token ? `${token}` : '',
      },
    },
  );

  if (!response.ok) {
    // const error = new Error('Failed to fetch data');
    // console.log(response);
    // throw error;
  } else {
    const data: ApiResponse = await response.json();
    return data.data;
  }
}

export default async function CocktailDetail({ cocktailId }: Props) {
  const cocktailDetailData = await getData({ cocktailId });
  const cocktailIngredients: Cocktail_Ingredients[] =
    cocktailDetailData.cocktail_ingredients;
  // console.log(cocktailDetailData);
  return (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{cocktailDetailData.name}</div>

          <div className={styles.nickname}>
            <LikeCount
              count={cocktailDetailData.heart_count}
              cocktailId={cocktailId}
              isLiked={cocktailDetailData.heart}
            />
            <div className={styles.info}>
              {cocktailDetailData.alcohol_content}도
            </div>
            <div className={styles.info}>
              당도{cocktailDetailData.sweetness}
            </div>
          </div>

          <div />
          <div className={styles.buttons}>
            <Link href={`/cocktail/custom/write/${cocktailId}`}>
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
            <IngredientCardWrapper
              ingredients={cocktailIngredients}
              storeData={storeList}
            />
            <ToolCardWrapper
              cocktailTools={cocktailDetailData.cocktail_tools}
            />
            <CustomCocktailRecipe recipe={cocktailDetailData.recipe} />
          </div>
        </div>

        <hr className={styles.hr2} />
        <div className={styles.flex}>
          <div className={styles.title}>커스텀 칵테일</div>

          <div className={styles.all}>
            {cocktailDetailData.custom_cocktails?.length > 0 ? (
              <Link href={`/cocktail/custom/${cocktailId}`}>
                <BtnWithIcon text="전체보기" btnStyle="full-point" />
              </Link>
            ) : null}
          </div>
        </div>
        <div>
          {cocktailDetailData.custom_cocktails?.length > 0 ? (
            <CustomCocktailCardWrapper
              dummy={cocktailDetailData.custom_cocktails}
              type="small"
            />
          ) : (
            <div className={styles['no-custom']}>
              등록된 커스텀 칵테일이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
  // );
}

interface Custom_Cocktails {
  custom_id: number;
  custom_name: string;
  custom_summary: string;
  user_id: number;
  user_nickname: string;
}
