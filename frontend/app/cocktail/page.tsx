import React from 'react';

import styles from './cocktail-list.module.scss';
import CocktailList from '@/components/cocktail-list/CocktailList';
import CocktailPagination from '@/components/cocktail-list/CocktailPagination';
import CocktailSearchForm from '@/components/cocktail-list/CocktailSearchForm';
import SortBy from '@/components/cocktail-list/SortBy';

export default function Page() {
  return (
    <div className={styles['page-container']}>
      <CocktailSearchForm />
      <SortBy />
      <CocktailList />
      <CocktailPagination />
    </div>
  );
}
