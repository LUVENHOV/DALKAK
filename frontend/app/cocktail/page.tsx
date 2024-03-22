import React from 'react';

import styles from './cocktail-list.module.scss';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import CocktailSearchForm from '@/components/cocktail-list/CocktailSearchForm';

/** cocktail list data fetching */

const dummy = [
  {
    id: '1',
    name: 'Cosmopolitan',
    koreanName: '코스모폴리탄',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/a573380e-c13f-4ae1-8c46-eec0b703654d.jpg?imwidth=1000',
    heartCount: 28,
  },
  {
    id: '2',
    name: 'Rose Kennedy Cocktail',
    koreanName: '로즈 케네디 칵테일',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/6c44e6b7-5c59-4bde-ad80-013c7ce225ca.jpg?imwidth=1000',
    heartCount: 16,
  },
  {
    id: '3',
    name: 'Crime Of Passion',
    koreanName: '크라임 오브 패션',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/3285b7df-3ee0-4fa1-9294-0ee0346d37ee.jpg?imwidth=1000',
    heartCount: 48,
  },
  {
    id: '4',
    name: 'Skinny Bitch',
    koreanName: '스키니 비치',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/0f456775-e158-4763-bb8d-32fa6ac333d7.jpg?imwidth=1000',
    heartCount: 58,
  },
  {
    id: '5',
    name: 'Frozen Margarita',
    koreanName: '프로즌 마가리타',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/046b8554-95e2-4655-97c1-00ce7d57818c.jpg?imwidth=1000',
    heartCount: 57,
  },
];

export default function Page() {
  return (
    <div className={styles['page-container']}>
      <div className={styles['search-container']}>
        <CocktailSearchForm />
      </div>
      <div className={styles['list-container']}>
        <div className={styles['cocktail-list']}>
          {dummy.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              id={cocktail.id}
              name={cocktail.name}
              koreanName={cocktail.koreanName}
              image={cocktail.image}
              heartCount={cocktail.heartCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
