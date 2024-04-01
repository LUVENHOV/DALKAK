import styles from './RecommendList.module.scss';
import CocktailCard from '../cocktail-list/CocktailCard';
import NoContent from '../common/NoContent';
import { ICocktailType } from '@/type/searchTypes';

interface IPropsType {
  title: string;
  cocktailList: ICocktailType[];
}

export default function RecommendList(props: IPropsType) {
  const { title, cocktailList } = props;

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <div className={styles['color-block']} />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles['color-block']} />
      </div>
      <div className={styles.cocktails}>
        {cocktailList.length === 0 ? (
          <NoContent
            title="이런!"
            line1="지금 가진 재료로 만들 수 있는 칵테일이 없어요"
            line2="아래의 추가 리스트를 확인해보세요"
          />
        ) : (
          cocktailList.map((cocktail: ICocktailType) => (
            <CocktailCard
              key={cocktail.id}
              id={cocktail.id}
              name={cocktail.name}
              koreanName={cocktail.korean_name}
              image={cocktail.image}
              heartCount={cocktail.heart_count}
            />
          ))
        )}
      </div>
    </div>
  );
}
