import IngredientsTitle from './IngredientsTitle';
import styles from './MemoContainer.module.scss';

import MemoPad from './MemoPad';

export default function MemoContainer() {
  return (
    <div className={styles.container}>
      <div className={styles['search-wrapper']}>
        <IngredientsTitle
          title="메모장"
          desc="나중에 살 재료들을 저장해요"
          placeholder="메모장에 추가할 재료를 검색해보세요!"
          isRefr={false}
        />
      </div>
      <div className={styles['memo-wrapper']}>
        <MemoPad />
      </div>
    </div>
  );
}
