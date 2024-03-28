'use client';

import React, { useCallback, useEffect, useState } from 'react';

import LockOutlined from '@mui/icons-material/LockOutlined';
import PublicOutlined from '@mui/icons-material/PublicOutlined';
import { useRouter } from 'next/navigation';
import styles from './CustomCocktailWrite.module.scss';

import BtnWithIcon from '@/components/common/BtnWithIcon';
import CustomCocktailAddIngredient from '@/components/custom-cocktail/write/CustomCocktailAddIngredient';
import CustomCocktailAddRecipe from '@/components/custom-cocktail/write/CustomCocktailAddRecipe';
import CustomCocktailImageUpload from '@/components/custom-cocktail/write/CustomCocktailImageUpload';
import CustomCocktailInput from '@/components/custom-cocktail/write/CustomCocktailInput';
// import { RepeatOneSharp } from '@mui/icons-material';

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

// interface Data {
//   id: number;
//   name: string;
//   korean_name: string;
//   image: string;
//   heart_count: number;
//   view_count: number;
//   alcohol_content: number;
//   sweetness: number;
//   recipe: string;
//   cocktail_ingredients: Cocktail_Ingredients[];
//   cocktail_tools: Cocktail_Tools[];
//   custom_cocktails: Custom_Cocktails[];
// }

// interface ApiResponse {
//   code: number;
//   messages: string[];
//   data: Data;
// }

// interface Ingredient {
//   id: number;
//   name: string;

//   category: {
//     id: number;
//     name: string;
//   };
// }

interface Props {
  cocktailId: number;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function CustomCocktailWrite(cocktailId: Props) {
  const [isPublic, setIsPublic] = useState(false);
  // const [cocktailAllData, setCocktailAllData] = useState<Data>();
  // const [cocktailData, setCocktailData] = useState<[]>([]);
  const [ingredientData, setIngredientData] = useState<Cocktail_Ingredients[]>(
    [],
  );
  const [koreanName, setKoreanName] = useState('');
  const [englishName, setEnglishName] = useState('');

  const [baseRecipe, setBaseRecipe] = useState('');

  // const [customName, setCustomName] = useState('');

  const router = useRouter();
  // console.log(cocktailId);
  const [inputValue, setInputValue] = useState('');

  const infoPlaceholder =
    '추가 설명이나 후기를 알려주세요.\n\n 이런 내용이 들어가면 좋아요!| 이 재료는 다른 걸로 대체할 수 있어요 | - 기존 레시피와 비교해서 맛이 이렇게 달라요 | - 이럴 때 마시는 걸 추천해요';

  //   eslint-disable-next-line no-shadow

  const getBaseData = useCallback(async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/1`,
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
      const result = await response.json();
      console.log(result);
      const data = await result.data;
      return data;
    }
  }, []);

  useEffect(() => {
    const getBaseCocktailData = async () => {
      const response = await getBaseData();

      // setCocktailAllData(await response.data);

      setKoreanName(await response.korean_name);
      setEnglishName(await response.name);
      setIngredientData(await response.cocktail_ingredients);
      setBaseRecipe(await response.recipe);
    };
    getBaseCocktailData();
  }, []);

  // eslint-disable-next-line no-shadow
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
            &nbsp;&nbsp; {englishName}, {koreanName}
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
            <CustomCocktailAddIngredient origin={ingredientData} />
            <CustomCocktailAddRecipe recipe={baseRecipe} />
          </div>
        </div>
      </div>
    </div>
  );
}
