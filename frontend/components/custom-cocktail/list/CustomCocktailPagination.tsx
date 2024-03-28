'use client';

import ReactPaginate from 'react-paginate';

import styles from './CustomCocktailPagination.module.scss';

type PageClickHandler = (e: { selected: number }) => Promise<void>;

interface Props {
  totalPages: number;
  handlePageClick: PageClickHandler;
}

export default function Pagination({ totalPages, handlePageClick }: Props) {
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
    </div>
  );
}
