import React from 'react';

import { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './CocktailDetail.module.scss';

import BtnWithIcon from '@/components/common/BtnWithIcon';
import LikeCount from '@/components/common/LikeCount';

import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';

import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe';

import IngredientCardWrapper from '@/components/custom-cocktail/IngredientCardWrapper';
import ToolCardWrapper from '@/components/custom-cocktail/ToolCardWrapper';

import alcohol from '@/public/assets/imgs/alcohol.png';
import apple from '@/public/assets/imgs/apple.png';
import ice from '@/public/assets/imgs/ice.png';
import jigger from '@/public/assets/imgs/jigger.png';
import lemon from '@/public/assets/imgs/lemon.png';
import muddler from '@/public/assets/imgs/muddler.png';
import shaker from '@/public/assets/imgs/shaker.png';
import vodka from '@/public/assets/imgs/vodka.png';

interface CocktailIngredients {
  ingredient: {
    id: number;
    name: string;
    image: string | StaticImageData;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface CocktailTools {
  id: number;
  name: string;
  image: string | StaticImageData;
}

interface CustomCocktails {
  custom_id: number;
  custom_name: string;
  custom_image: string;
  summary: string;
  user_id: number;
  user_nickname: string;
}

interface CocktailData {
  id: string;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
  alcohol_content: number;
  sweetness: number;
  recipe: string;
  cocktail_ingredients: CocktailIngredients[];
  cocktail_tools: CocktailTools[];
  custom_cocktails: CustomCocktails[];
}

interface Ingredient {
  id: number;
  name: string;
  image: string | StaticImageData;
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
      image: lemon,
      category: {
        id: 2,
        name: 'fruit',
      },
    },
    {
      id: 3,
      name: '얼음',
      image: ice,
      category: {
        id: 3,
        name: 'beverage',
      },
    },
    {
      id: 7,
      name: '보드카',
      image: vodka,
      category: {
        id: 1,
        name: 'alcohol',
      },
    },
    {
      id: 8,
      name: '어쩌고',
      image: vodka,
      category: {
        id: 1,
        name: 'alcohol',
      },
    },
  ],
};

const cocktailData: CocktailData = {
  id: '1',
  name: 'Apple Martini',
  korean_name: '애플 마티니',

  image: 'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
  heart_count: 245,
  alcohol_content: 3,
  sweetness: 5,

  recipe:
    '1. 먼저 얼음으로 하이볼 글라스를 차갑게 만들어주세요.|2. 앱솔루트 망고 크란베리 주스와 오랜지 주스를 부어 넣어주세요.|3. 모든 재료를 조심스레 섞어주세요.|4. 망고 웨지로 가니쉬를 해주어 장식해 주세요.|5. 짜잔 이제 당신만의 망고 브리즈를 즐길 수 있게 되었습니다 망고 브리즈는 단순히 음료가 아니에요 햇볕이 피부를 따스히 감싸고 모래사장이 있는 푸른 바다 위에서 해먹에 누워있는 듯한 경험을 선사해 주죠.|6. 따라서 특별한 기념일을 축하하거나 아무때나 마시세요.',

  cocktail_ingredients: [
    {
      ingredient: {
        id: 1,
        name: '사과',
        image: apple,
      },
      ingredient_amount: 50,
      unit: {
        id: 1,
        name: '조각',
      },
    },

    {
      ingredient: {
        id: 3,
        name: '얼음',
        image: ice,
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
        image: alcohol,
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
        image: alcohol,
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
        image: alcohol,
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
        image: vodka,
      },
      ingredient_amount: 40,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
  ],
  cocktail_tools: [
    {
      id: 2,
      name: '지거',
      image: jigger,
    },
    {
      id: 3,
      name: '셰이커',
      image: shaker,
    },
    {
      id: 11,
      name: '머들러',
      image: muddler,
    },
  ],
  custom_cocktails: [
    {
      custom_id: 1,
      custom_name: '날씨 좋은 주말을 위한 애플 마티니',
      custom_image:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      user_id: 1,
      user_nickname: '끼리코',
    },
    {
      custom_id: 2,
      custom_name: '날씨 좋은 주말에 마시기 좋아요',
      custom_image:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      user_id: 2,
      user_nickname: '갈현동의칵테일마스터',
    },
    {
      custom_id: 3,
      custom_name: '술찌들을 위한 커스텀 레시피',
      custom_image:
        'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      user_id: 3,
      user_nickname: '사샤',
    },
    {
      custom_id: 4,
      custom_name: '아쉬운대로 만든 애플 마티니',
      custom_image:
        'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      user_id: 4,
      user_nickname: '무무',
    },
  ],
};

interface Props {
  cocktailId: string;
}

export default function CocktailDetail({ cocktailId }: Props) {
  console.log(cocktailId);

  const cocktailIngredients: CocktailIngredients[] =
    cocktailData.cocktail_ingredients;

  const cocktailTools: CocktailTools[] = cocktailData.cocktail_tools;

  const storeList = storeData.ingredients;

  const customPreviewList: CustomCocktails[] = cocktailData.custom_cocktails;

  return (
    // <div>{cocktailId}</div>
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{cocktailData.name}</div>

          <div className={styles.nickname}>
            <LikeCount count={245} />
            <div className={styles.info}>
              {/* {cocktailData.alcohol_content} */}
              35도
            </div>
            <div className={styles.info}>
              {/* {cocktailData.sweetness} */}
              강한 단맛
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
            <CustomCocktailImage customImage={cocktailData.image} />
          </div>
          <div className={styles.space}>
            <IngredientCardWrapper
              ingredients={cocktailIngredients}
              storeData={storeList}
            />
            <ToolCardWrapper cocktailTools={cocktailTools} />
            <CustomCocktailRecipe recipe={cocktailData.recipe} />
          </div>
        </div>

        <hr className={styles.hr2} />
        <div className={styles.flex}>
          <div className={styles.title}>커스텀 칵테일</div>
          <div className={styles.all}>전체보기</div>
        </div>
        <div>
          <CustomCocktailCardWrapper dummy={customPreviewList} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const dummyCocktailId = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return dummyCocktailId.map((cocktail) => ({
    cocktailId: cocktail.id.toString(),
  }));
}
