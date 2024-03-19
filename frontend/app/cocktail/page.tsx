import React from 'react';
import styles from './cocktail-list.module.scss';
import CocktailSearchForm from '@/components/cocktail-list/CocktailSearchForm';
import SortBy from '@/components/cocktail-list/SortBy';

/** cocktail list data fetching */

export default function Page() {
  return (
    <div className={styles['page-container']}>
      <div className={styles['search-container']}>
        <CocktailSearchForm />
      </div>
      <div className={styles['list-container']}>
        <div className={styles['sort-container']}>
          <SortBy />
        </div>
        <div className={styles['cocktail-list']}>칵테일 리스트</div>
      </div>
    </div>
  );
}
