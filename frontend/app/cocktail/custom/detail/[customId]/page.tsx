import React from 'react';

import { StaticImageData } from 'next/image';

import styles from './page.module.scss';
import CustomCocktailIngredientCardWrapper from '../../../../../components/custom-cocktail/CustomCocktailIngredientCardWrapper.tsx';
import alcohol from '../../../../../public/assets/imgs/alcohol.png';
import apple from '../../../../../public/assets/imgs/apple.png';
import ice from '../../../../../public/assets/imgs/ice.png';
import lemon from '../../../../../public/assets/imgs/lemon.png';
import vodka from '../../../../../public/assets/imgs/vodka.png';
import CustomCocktailDeleteButton from '@/components/custom-cocktail/CustomCocktailDeleteButton.tsx';
import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailInfo from '@/components/custom-cocktail/CustomCocktailInfo.tsx';
import CustomCocktailModifyButton from '@/components/custom-cocktail/CustomCocktailModifyButton.tsx';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe.tsx';

interface IngredientsList {
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

interface CustomDetailData {
  user: {
    id: number;
    name: string;
  };
  cocktail: {
    id: number;
    name: string;
  };
  id: number;
  name: string;
  image: string;
  recipe: string;
  summary: string;
  comment: string;
  custom_cocktail_ingredients: ingredientsList[];
  open: boolean;
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

interface ingredientsList {}

export default function Page() {
  const customDetailData: CustomDetailData = {
    user: {
      id: 1,
      name: '끼리코',
    },
    cocktail: {
      id: 1,
      name: '애플 마티니',
    },
    id: 1,
    name: '날씨 좋은 주말을 위한 애플 마티니',
    image:
      'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
    recipe:
      '1. 먼저 얼음으로 하이볼 글라스를 차갑게 만들어주세요.|2. 앱솔루트 망고 크란베리 주스와 오랜지 주스를 부어 넣어주세요.|3. 모든 재료를 조심스레 섞어주세요.|4. 망고 웨지로 가니쉬를 해주어 장식해 주세요.|5. 짜잔 이제 당신만의 망고 브리즈를 즐길 수 있게 되었습니다 망고 브리즈는 단순히 음료가 아니에요 햇볕이 피부를 따스히 감싸고 모래사장이 있는 푸른 바다 위에서 해먹에 누워있는 듯한 경험을 선사해 주죠.|6. 따라서 특별한 기념일을 축하하거나 아무때나 마시세요.',
    summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
    comment:
      '집에 다른 칵테일 만들다 남은 레몬이랑 레몬 리큐르가 애매하게 남아서한 번 넣어봤는데 원래 먹던 것보다 상큼하고 사람들이 좀 더 대중적으로 좋아할 것 같은 맛이 된 것 같아요 ㅋㅋ 둘 중 하나만 넣어도 괜찮을 것 같고... 재레몬 넣으시는 거 추천 드립니다!',
    custom_cocktail_ingredients: [
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
          id: 2,
          name: '레몬',
          image: lemon,
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
    open: true,
  };

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

  const ingredientsList: IngredientsList[] = customDetailData.custom_cocktail_ingredients;

  const storeList: StoreData[] = storeData.ingredients;

  return (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{customDetailData.name}</div>
          <div className={styles.nickname}>
            by&nbsp;{customDetailData.user.name}
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
            <CustomCocktailImage customImage={customDetailData.image} />
            <div className={styles['info-container']}>
              <CustomCocktailInfo cocktail={customDetailData.cocktail.name} />
              <CustomCocktailInfo summary={customDetailData.summary} />
              <CustomCocktailInfo comment={customDetailData.comment} />
            </div>
          </div>
          <div className={styles.space}>
            <CustomCocktailIngredientCardWrapper
              ingredients={ingredientsList}
              storeData={storeList}
            />
            <CustomCocktailRecipe recipe={customDetailData.recipe} />
          </div>
        </div>
      </div>
    </div>
  );
}
