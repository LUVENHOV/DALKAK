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
  customId: string;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export async function getData({ customId }: Props) {
  // console.log(customId);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${customId}`,
    {
      headers: {
        Authorization: token ? `${token}` : '',
      },
    },
  );

  if (!response.ok) {
    const error = new Error('Failed to fetch data');
    throw error;
  } else {
    const data: ApiResponse = await response.json();
    return data.data;
  }
}
export default async function CustomCocktailDetail({ customId }: Props) {
  const customCocktailDetailData = await getData({ customId });

  const customIngredients: Custom_Ingredients[] =
    customCocktailDetailData.custom_ingredients;

  return (
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
            <IngredientCardWrapper
              ingredients={customIngredients}
              storeData={storeList}
            />
            <CustomCocktailRecipe recipe={customCocktailDetailData.recipe} />
          </div>
        </div>
      </div>
    </div>
  );
}
