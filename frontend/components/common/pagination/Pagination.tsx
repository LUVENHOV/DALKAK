'use client';

// API 완성 후 다시 구현
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface Props {
  articles: Articles[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

interface Articles {
  id: number;
  title: string;
  comment: string;
  author: string;
  imageLink: string;
}

export default function Pagination({
  articles,
  totalCount,
  totalPages,
  currentPage,
}: Props) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 20;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * 20) % articles.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={2}
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
    </div>
  );
}
