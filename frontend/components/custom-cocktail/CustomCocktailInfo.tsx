import React from 'react';

import styles from './CustomCocktailInfo.module.scss';

interface Props {
  // eslint-disable-next-line react/require-default-props
  cocktail?: string | undefined;
  // eslint-disable-next-line react/require-default-props
  summary?: string;
  // eslint-disable-next-line react/require-default-props
  comment?: string;
}

export default function CustomCocktailInfo({
  cocktail,
  summary,
  comment,
}: Props) {
  let renderedContent;

  if (cocktail !== undefined) {
    renderedContent = (
      <div className={styles['left-border']}>
        <div className={styles.margin}>
          <div className={styles.base}>활용한 칵테일</div>
          <div>{cocktail}</div>
        </div>
      </div>
    );
  } else if (summary !== undefined) {
    renderedContent = (
      <div className={styles['left-border']}>
        <div className={styles.margin}>
          <div className={styles.base}>이렇게 바꿔봤어요!</div>
          <div>{summary}</div>
        </div>
      </div>
    );
  } else if (comment !== undefined) {
    renderedContent = (
      <div className={styles['left-border']}>
        <div className={styles.margin}>
          <div>{comment}</div>
        </div>
      </div>
    );
  }
  return <div className={styles.content}>{renderedContent}</div>;
}
