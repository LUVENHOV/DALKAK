import React from 'react';

import Pagination from '@/components/common/pagination/Pagination';
import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';
import CustomCocktailList from '@/components/custom-cocktail/CustomCocktailList';
import CustomCocktailWriteButton from '@/components/custom-cocktail/CustomCocktailWriteButton';

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

export default function Page() {
  const totalData: TotalData = {
    custom_cocktails: [
      {
        id: 1,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 2,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 3,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 4,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 5,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 6,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 7,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 8,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 9,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 10,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 11,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 12,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 13,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 14,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 15,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 16,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 17,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 18,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 19,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 20,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 21,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 22,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 23,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 24,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 25,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 26,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 27,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 28,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 29,
        title: '더 상큼해진 애플 마티니',
        comment: '사과를 더 썼어요!',
        author: '끼리코',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/18b10bdd-141e-4f5d-b431-84c9807ab447.jpg?imwidth=375',
      },
      {
        id: 30,
        title: '날씨 좋은 주말에 마시기 좋아요',
        comment: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
        author: '갈현동의칵테일마스터',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/37e3307e-21ee-4826-b44a-a2834f7af1cb.jpg?imwidth=375',
      },
      {
        id: 31,
        title: '술찌들을 위한 커스텀 레시피',
        comment: '기존 레시피보다 순하게 만들었습니다',
        author: '사샤',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/415x570/be6d7268-ddc0-4a29-8160-8cd3fdcf8275.jpg?imwidth=375',
      },
      {
        id: 32,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
      },
      {
        id: 32,
        title: '아쉬운대로 만든 애플 마티니',
        comment: '이것저것 집에 있는 재료 털어서 만들었어요',
        author: '무무',
        imageLink:
          'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
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
      <CustomCocktailWriteButton />
      <CustomCocktailList />

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
