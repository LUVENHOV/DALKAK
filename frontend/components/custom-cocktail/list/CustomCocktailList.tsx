import React from 'react';

import Pagination from '@/components/common/pagination/Pagination';
import UpperLineBanner from '@/components/common/UpperLineBanner';
import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';
// import CustomCocktailWriteButton from '@/components/custom-cocktail/CustomCocktailWriteButton';

interface DummyList {
  id: number;
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}
interface TotalData {
  custom_cocktails: DummyList[];
  total_count: number;
  total_pages: number;
  current_page: number;
}

interface Props {
  cocktailId: string;
}

export default function CustomCocktailList({ cocktailId }: Props) {
  // console.log(cocktailId);

  const totalData: TotalData = {
    custom_cocktails: [
      {
        id: 1,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 2,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 3,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 4,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 5,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 6,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 7,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 8,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 9,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 10,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 11,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 12,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 13,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 14,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 15,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 16,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 17,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 18,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 19,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 20,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 21,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 22,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 23,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 24,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 25,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 26,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 27,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 28,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 29,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/green-apple-martini.png',
      },
      {
        id: 30,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://ik.imagekit.io/bhug69xts/tr:h-1200,w-1200/apple-martini.png',
      },
      {
        id: 31,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://www.liquor.com/thmb/sv91lrGrqOrH4iNMYDPC8eE5zdQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__20084113__appletini-720x720-recipe-e40e3ceb5ca7493ab93d90019cbb56a7.jpg',
      },
      {
        id: 32,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
      {
        id: 32,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://mybartender.com/wp-content/uploads/2023/11/delicious-green-apple-cocktail-320x320.png',
      },
    ],
    total_count: 33,
    total_pages: 12,
    current_page: 1,
  };

  // const totalCount = totalData.total_count;
  const totalPages = totalData.total_pages;
  // const currentPage = totalData.current_page;

  const dummyList: DummyList[] = totalData.custom_cocktails;

  return (
    <div>
      {/* <CustomCocktailWriteButton /> */}
      <UpperLineBanner
        frontText="끼리코"
        secondText="님이 좋아하시는 칵테일이에요!"
      />
      <CustomCocktailCardWrapper dummy={dummyList} />

      <Pagination
        articles={dummyList}
        // totalCount={totalCount}
        totalPages={totalPages}
        // currentPage={currentPage}
      />
    </div>
  );
}
