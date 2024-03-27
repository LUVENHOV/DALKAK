'use client';

import ReactPaginate from 'react-paginate';

import styles from './CocktailPagination.module.scss';
import useSearchStore from '@/store/searchStore';

export default function CocktailPagination() {
  const { page, totalPage, setPage, setActivateSearch } = useSearchStore();

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    setActivateSearch();
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        forcePage={page - 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={totalPage}
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
