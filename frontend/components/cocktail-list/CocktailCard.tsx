import styles from './CocktailCard.module.scss';
import { FavoriteBorder } from '@mui/icons-material';
import Link from 'next/link';

interface propsType {
  id: string;
  name: string;
  koreanName: string;
  image: string;
  heartCount: number;
}

export default function CocktailCard(props: propsType) {
  const { id: cocktailId, name, koreanName, image, heartCount } = props;

  return (
    <>
      <Link href={`/cocktail/${cocktailId}`}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.title}>
            <div className={styles.name}>
              <h1 className={styles.eng}>{name}</h1>
              <h3 className={styles.kor}>{koreanName}</h3>
            </div>
            <div className={styles.like}>
              <FavoriteBorder />
              {heartCount}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
