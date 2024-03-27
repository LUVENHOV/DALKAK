'use client';

import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import styles from './CustomCocktailPagination.module.scss';
import CustomCocktailCardWrapper from '../CustomCocktailCardWrapper';

interface Articles {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface Props {
  articles: Articles[];
  totalPages: number;
  // eslint-disable-next-line react/no-unused-prop-types
  totalCount: number;
  currentPage: number;
  cocktailId: string;
}

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

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function Pagination({
  articles,
  totalPages,

  currentPage,
  cocktailId,
}: Props) {
  // const [itemOffset, setItemOffset] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [newList, setNewList] = useState<Custom_Cocktails[]>([]);

  const article = articles;

  // eslint-disable-next-line no-shadow
  const newfetch = async (currentPageNum: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${cocktailId}/custom-list?page=${currentPageNum}`,
      {
        headers: {
          Authorization: token ? `${token}` : '',
        },
      },
    );

    if (!(await response).ok) {
      const error = new Error('Failed to fetch data');
      throw error;
    } else {
      const data: ApiResponse = await response.json();
      setNewList(data.data.custom_cocktails);
      // return data.data;
    }
  };

  const handlePageClick = async (e: { selected: number }) => {
    if (article) {
      setCurrentPageNum(e.selected + 1);
      try {
        await newfetch(e.selected + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
        // 오류 처리를 추가하세요.
      }
    }
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        pageClassName={styles['pagination-page']}
        previousClassName={styles['pagination-prev']}
        nextClassName={styles['pagination-next']}
        previousLinkClassName={styles['pagination-link']}
        nextLinkClassName={styles['pagination-link']}
        activeClassName={styles['pagination-link-active']}
      />
      <CustomCocktailCardWrapper dummy={newList} />
    </div>
  );
}
