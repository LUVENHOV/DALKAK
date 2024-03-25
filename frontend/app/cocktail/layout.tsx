import React from 'react';
import styles from './cocktail-list.module.scss';
import CocktailSearchForm from '@/components/cocktail-list/CocktailSearchForm';
import Pagination from '@/components/common/pagination/Pagination';

export default async function CocktailListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles['page-container']}>
      <CocktailSearchForm />
      <div className={styles['list-container']}>{children}</div>
      {/* <Pagination articles={cocktailList} totalPages={50} /> */}
    </div>
  );
}
