import React from 'react';
import CustomCocktailList from '../../../../components/custom-cocktail/CustomCocktailList.tsx';

import CustomCocktailWriteButton from '../../../../components/custom-cocktail/CustomCocktailWriteButton.tsx';

interface DummyList {
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}

export default function Page() {
  const dummyList: DummyList[] = [
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '날씨 좋은 주말에 마시기 좋아요',
      comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      author: '갈현동의칵테일마스터',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
    },
    {
      title: '술찌들을 위한 커스텀 레시피',
      comment: '기존 레시피보다 순하게 만들었습니다',
      author: '사샤',
      imageLink:
        'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
    },
    {
      title: '아쉬운대로 만든 애플 마티니',
      comment: '이것저것 집에 있는 재료 털어서 만들었어요',
      author: '무무',
      imageLink:
        'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
    },
    {
      title: '아쉬운대로 만든 애플 마티니',
      comment: '이것저것 집에 있는 재료 털어서 만들었어요',
      author: '무무',
      imageLink:
        'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
    },
    {
      title: '술찌들을 위한 커스텀 레시피',
      comment: '기존 레시피보다 순하게 만들었습니다',
      author: '사샤',
      imageLink:
        'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '날씨 좋은 주말에 마시기 좋아요',
      comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      author: '갈현동의칵테일마스터',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
    },
    {
      title: '날씨 좋은 주말에 마시기 좋아요',
      comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      author: '갈현동의칵테일마스터',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
    },
    {
      title: '아쉬운대로 만든 애플 마티니',
      comment: '이것저것 집에 있는 재료 털어서 만들었어요',
      author: '무무',
      imageLink:
        'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
    },
    {
      title: '술찌들을 위한 커스텀 레시피',
      comment: '기존 레시피보다 순하게 만들었습니다',
      author: '사샤',
      imageLink:
        'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
    },
    {
      title: '날씨 좋은 주말에 마시기 좋아요',
      comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
      author: '갈현동의칵테일마스터',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
    {
      title: '더 상큼해진 애플 마티니',
      comment: '사과를 더 썼어요!',
      author: '끼리코',
      imageLink:
        'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
    },
  ];
  return (
    <div>
      <div>
        <div>
          <CustomCocktailWriteButton />
        </div>
      </div>
      <CustomCocktailList dummy={dummyList} />
    </div>
  );
}
