import styles from './AboveRefridgerator.module.scss';

import IngredientsTitle from './IngredientsTitle';
import RefridgeratorRecommend from './RefridgeratorRecommend';

export default function AboveRefridgerator() {
  return (
    <div className={styles.container}>
      <IngredientsTitle
        title="냉장고"
        desc="현재 가지고 있는 재료들을 저장해요"
        placeholder="냉장고에 추가할 재료를 검색해보세요!"
        isRefr
      />
      <RefridgeratorRecommend />
    </div>
  );
}
