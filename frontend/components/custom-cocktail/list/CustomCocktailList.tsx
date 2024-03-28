'use client';

import React, { useState, useEffect, useCallback } from 'react';

import UpperLineBanner from '@/components/common/UpperLineBanner';
import CustomCocktailCardWrapper from '@/components/custom-cocktail/CustomCocktailCardWrapper';
import CustomCocktailPagination from '@/components/custom-cocktail/list/CustomCocktailPagination';

interface User {
  id: number;
  nickname: string;
}

interface Custom_Cocktails {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: User;
}

interface ApiResponse {
  custom_cocktails: Custom_Cocktails[];
  current_page: number;
  total_page: number;
  total_elements: number;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

interface Props {
  cocktailId: number;
}

export default function CustomCocktailList(props: Props) {
  const { cocktailId } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [customAllData, setCustomAllData] = useState<ApiResponse>();
  const [customList, setCustomList] = useState<Custom_Cocktails[]>([]);

  const getCustomList = useCallback(
    async (id: number) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${id}/custom-list?page=${currentPage}`,
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
        const a = await response.json();
        const data = await a.data;
        return data;
      }
    },
    [currentPage],
  );

  const handlePageClick = async (e: { selected: number }) => {
    if (customList) {
      setCurrentPage(e.selected + 1);
    }
  };

  useEffect(() => {
    const updateCustomList = async () => {
      const response = await getCustomList(cocktailId);

      setCustomAllData(await response);
      setCustomList(await response.custom_cocktails);
    };
    updateCustomList();
  }, [currentPage, getCustomList, cocktailId]);

  return (
    <div>
      <UpperLineBanner
        frontText="끼리코"
        secondText="님이 좋아하시는 칵테일이에요!"
      />
      <CustomCocktailCardWrapper dummy={customList} type="big" />

      <CustomCocktailPagination
        totalPages={customAllData?.total_page ?? 0}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}
