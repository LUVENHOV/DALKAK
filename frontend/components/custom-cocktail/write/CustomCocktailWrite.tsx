'use client';

import React, { useState } from 'react';

import LockOutlined from '@mui/icons-material/LockOutlined';
import PublicOutlined from '@mui/icons-material/PublicOutlined';
import { useRouter } from 'next/navigation';
import styles from './CustomCocktailWrite.module.scss';

import BtnWithIcon from '@/components/common/BtnWithIcon';
import CustomCocktailAddIngredient from '@/components/custom-cocktail/write/CustomCocktailAddIngredient';
import CustomCocktailAddRecipe from '@/components/custom-cocktail/write/CustomCocktailAddRecipe';
import CustomCocktailImageUpload from '@/components/custom-cocktail/write/CustomCocktailImageUpload';
import CustomCocktailInput from '@/components/custom-cocktail/write/CustomCocktailInput';

// import { StaticImageData } from 'next/image';

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
  recipe: string;
  summary: string;
  comment: string;
  ingredientList: IngredientsList[];
}

const originIngredientList: OriginIngredient = {
  recipe:
    '1. 먼저 얼음으로 하이볼 글라스를 차갑게 만들어주세요.|2. 앱솔루트 망고 크란베리 주스와 오랜지 주스를 부어 넣어주세요.|3. 모든 재료를 조심스레 섞어주세요.|4. 망고 웨지로 가니쉬를 해주어 장식해 주세요.|5. 짜잔 이제 당신만의 망고 브리즈를 즐길 수 있게 되었습니다 망고 브리즈는 단순히 음료가 아니에요 햇볕이 피부를 따스히 감싸고 모래사장이 있는 푸른 바다 위에서 해먹에 누워있는 듯한 경험을 선사해 주죠.|6. 따라서 특별한 기념일을 축하하거나 아무때나 마시세요.',
  summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
  comment:
    '집에 다른 칵테일 만들다 남은 레몬이랑 레몬 리큐르가 애매하게 남아서한 번 넣어봤는데 원래 먹던 것보다 상큼하고 사람들이 좀 더 대중적으로 좋아할 것 같은 맛이 된 것 같아요 ㅋㅋ 둘 중 하나만 넣어도 괜찮을 것 같고... 재레몬 넣으시는 거 추천 드립니다!',
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
        id: 8,
        name: '앱솔루트 자몽',
      },
      ingredient_amount: 30,
      unit: {
        id: 4,
        name: 'ml',
      },
    },
    {
      ingredient: {
        id: 9,
        name: '체리',
      },
      ingredient_amount: 3,
      unit: {
        id: 5,
        name: '개',
      },
    },
  ],
};

const { recipe } = originIngredientList;
const origin: IngredientsList[] = originIngredientList.ingredientList;

interface Props {
  cocktailId: number;
}

export default function CustomCocktailWrite({ cocktailId }: Props) {
  const [isPublic, setIsPublic] = useState(false);
  const router = useRouter();
  console.log(cocktailId);
  const [inputValue, setInputValue] = useState('');

  const infoPlaceholder =
    '추가 설명이나 후기를 알려주세요.\n\n 이런 내용이 들어가면 좋아요!| 이 재료는 다른 걸로 대체할 수 있어요 | - 기존 레시피와 비교해서 맛이 이렇게 달라요 | - 이럴 때 마시는 걸 추천해요';

  //   eslint-disable-next-line no-shadow
  const splitedInfoPlaceholder = (infoPlaceholder: string) =>
    infoPlaceholder.split('|').join('\n');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleIsPublic = () => {
    if (isPublic === false) {
      setIsPublic(true);
    } else {
      setIsPublic(false);
    }
  };

  const handleNavigation = () => {
    alert('커스텀 칵테일 레시피가 등록되었습니다.');
    router.push('/cocktail/custom/detail/1');
  };
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
          <div />

          <div className={styles.buttons}>
            <div className={`${styles.button} ${styles.button1}`}>
              <BtnWithIcon
                icon={isPublic ? PublicOutlined : LockOutlined}
                text={isPublic ? '전체 공개' : '나만 보기'}
                btnStyle="empty-dark"
                handleOnClick={handleIsPublic}
              />
            </div>
            <div className={`${styles.button} ${styles.button2}`}>
              <BtnWithIcon
                text="커스텀 칵테일 등록"
                btnStyle="full-point"
                handleOnClick={handleNavigation}
              />
            </div>
          </div>
        </div>

        <div className={styles['inner-container']}>
          <div className={styles.space}>
            <CustomCocktailImageUpload />
            <div className={styles['input-container']}>
              <div className={styles.inputs}>
                <CustomCocktailInput
                  max={15}
                  placeText="커스텀 칵테일 이름을 입력해주세요"
                />
              </div>
              <div className={styles.inputs}>
                <CustomCocktailInput
                  max={20}
                  placeText="기존 칵테일과 어떻게 다른가요?"
                />
              </div>
              <div className={styles.inputs}>
                <textarea
                  className={styles['info-input']}
                  value={inputValue}
                  placeholder={splitedInfoPlaceholder(infoPlaceholder)}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className={styles.space}>
            <CustomCocktailAddIngredient origin={origin} />
            <CustomCocktailAddRecipe recipe={recipe} />
          </div>
        </div>
      </div>
    </div>
  );
}
