import React from 'react';

import Pagination from '@/components/common/pagination/Pagination';
import UpperLineBanner from '@/components/common/UpperLineBanner';
import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';
// import CustomCocktailWriteButton from '@/components/custom-cocktail/CustomCocktailWriteButton';

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

interface ApiResponse {
  code: number;
  messages: string[];
  data: {
    custom_cocktails: Custom_Cocktails[];
    current_page: number;
    total_page: number;
    total_elements: number;
  };
}

interface Props {
  cocktailId: string;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export async function getData({ cocktailId }: Props) {
  // console.log(cocktailId);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${cocktailId}/custom-list?page=1`,
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

export default async function CustomCocktailList({ cocktailId }: Props) {
  const customCocktailListData = await getData({ cocktailId });
  const customCocktailList: Custom_Cocktails[] =
    customCocktailListData.custom_cocktails;

  // const totalCount = totalData.total_count;
  const totalPages = customCocktailListData.total_page;
  // const currentPage = totalData.current_page;

  // const dummyList: DummyList[] = customCocktailList.custom_cocktails;

  return (
    <div>
      {/* <CustomCocktailWriteButton /> */}
      <UpperLineBanner
        frontText="끼리코"
        secondText="님이 좋아하시는 칵테일이에요!"
      />
      <CustomCocktailCardWrapper dummy={customCocktailList} />

      <Pagination
        articles={customCocktailListData}
        // totalCount={totalCount}
        totalPages={totalPages}
        // currentPage={currentPage}
      />
    </div>
  );
}
