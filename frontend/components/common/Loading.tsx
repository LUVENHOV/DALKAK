import Image from 'next/image';
import styles from './Loading.module.scss';

import loadingImage from '@/public/assets/imgs/loadingImage.png';

interface IPropsType {
  text1: string;
  text2: string;
}

export default function Loading(props: IPropsType) {
  const { text1, text2 } = props;

  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <div className={styles['image-container']}>
          <Image
            src={loadingImage}
            alt="loading image"
            width={300}
            height={300}
          />
        </div>
        <div className={styles['text-container']}>
          <div className={styles.text}>{text1}</div>
          <div className={styles.text}>{text2}</div>
        </div>
      </div>
    </div>
  );
}
