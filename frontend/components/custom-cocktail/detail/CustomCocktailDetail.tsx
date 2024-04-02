/* eslint-disable no-nested-ternary */
import React from 'react';

// import { StaticImageData } from 'next/image';
import styles from './CustomCocktailDetail.module.scss';

import IngredientCardWrapper from '../IngredientCardWrapper';
import CustomCocktailDeleteButton from '@/components/custom-cocktail/CustomCocktailDeleteButton';
import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailInfo from '@/components/custom-cocktail/CustomCocktailInfo';
import CustomCocktailModifyButton from '@/components/custom-cocktail/CustomCocktailModifyButton';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe';

interface Custom_Ingredients {
  ingredient: {
    id: number;
    name: string;
    image: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface Data {
  custom_ingredients: Custom_Ingredients[];
  user: {
    id: number;
    nickname: string;
  };
  origin_cocktail: {
    id: number;
    name: string;
    korean_name: string;
    image: string;
    heart_count: number;
  };
  id: number;
  name: string;
  image: string;
  recipe: string;
  summary: string;
  comment: string;
  open: boolean;
}

interface ApiResponse {
  code: number;
  messages: string[];
  data: Data;
}

interface Props {
  customId: number;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export async function getData({ customId }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${customId}`,
    {
      headers: {
        Authorization: token ? `${token}` : '',
      },
    },
  );

  if (!response.ok) {
    if (response.status === 403) {
      return 403;
    }
    // const error = new Error('Failed to fetch data');
    // throw error;

    return 404;
  }
  const data: ApiResponse = await response.json();
  return data.data;
}
export default async function CustomCocktailDetail({ customId }: Props) {
  const customCocktailDetailData = await getData({ customId });
  let customIngredients: Custom_Ingredients[] = [];
  if (customCocktailDetailData !== 403 && customCocktailDetailData !== 404) {
    customIngredients = customCocktailDetailData.custom_ingredients;
  }

  return customCocktailDetailData === 403 ? (
    <div>접근 권한이 없습니다</div>
  ) : customCocktailDetailData === 404 ? (
    <div>게시글을 불러올 수 없습니다</div>
  ) : (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{customCocktailDetailData.name}</div>
          <div className={styles.nickname}>
            by&nbsp;{customCocktailDetailData.user.nickname}
          </div>
          <div />

          <div className={styles.buttons}>
            <div className={styles.button}>
              <CustomCocktailModifyButton />
            </div>
            <div className={styles['divide-line']}>|</div>
            <div className={styles.button}>
              <CustomCocktailDeleteButton />
            </div>
          </div>
        </div>

        <hr className={styles.hr} />
        <div className={styles['inner-container']}>
          <div className={styles.space}>
            <CustomCocktailImage customImage={customCocktailDetailData.image} />
            <div className={styles['info-container']}>
              <CustomCocktailInfo cocktail={customCocktailDetailData.name} />
              <CustomCocktailInfo summary={customCocktailDetailData.summary} />
              <CustomCocktailInfo comment={customCocktailDetailData.comment} />
            </div>
          </div>
          <div className={styles.space}>
            <IngredientCardWrapper ingredients={customIngredients} />
            <CustomCocktailRecipe recipe={customCocktailDetailData.recipe} />
          </div>
        </div>
      </div>
    </div>
  );
}
