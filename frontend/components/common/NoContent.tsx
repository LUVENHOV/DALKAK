import Image from 'next/image';
import styles from './NoContent.module.scss';

import noContentImage from '../../public/assets/imgs/noContent.png';

interface IPropsType {
  title: string;
  line1: string;
  line2: string | null;
}

export default function NoContent(props: IPropsType) {
  const { title, line1, line2 } = props;

  return (
    <div className={styles.container}>
      <Image src={noContentImage} alt="no content" width={100} height={100} />
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <div>{line1}</div>
        <div>{line2}</div>
      </div>
    </div>
  );
}
