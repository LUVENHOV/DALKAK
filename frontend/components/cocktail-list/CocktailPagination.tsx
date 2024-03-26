'use client';

import ReactPaginate from 'react-paginate';

import styles from './CocktailPagination.module.scss';
import useSearchStore from '@/store/searchStore';

export default function CocktailPagination() {
  const { page, setPage } = useSearchStore();

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={20}
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
