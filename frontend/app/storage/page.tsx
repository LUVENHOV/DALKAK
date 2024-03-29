import styles from './refrigerator.module.scss';

import AboveRefridgerator from '@/components/store/AboveRefridgerator';
import MemoContainer from '@/components/store/MemoContainer';
import RefridgeratorContainer from '@/components/store/RefridgeratorContainer';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles['refrigerator-container']}>
        <AboveRefridgerator />
        <RefridgeratorContainer />
      </div>
      <div className={styles['memo-container']}>
        <MemoContainer />
      </div>
    </div>
  );
}
