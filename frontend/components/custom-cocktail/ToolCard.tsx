import React from 'react';
import Image from 'next/image';

import styles from './ToolCard.module.scss';

interface CocktailTool {
  id: number;
  name: string;
  image: string;
}

interface Props {
  cocktailTool: CocktailTool;
  // index: number;
  // lastIndex: number;
}

export default function ToolCard({ cocktailTool }: Props) {
  const className = '';

  // if (index === 0 && index !== lastIndex) {
  //   className = styles['start-ingredient'];
  // } else if (index === 0 && index === lastIndex) {
  //   className = styles['start-last-ingredient'];
  // } else if (index === 1 && index !== lastIndex) {
  //   className = styles['inner-ingredient'];
  // } else {
  //   className = styles['last-ingredient'];
  // }

  return (
    <div className={styles.container}>
      <div className={className}>
        <Image
          className={styles['ingredient-img']}
          src={cocktailTool.image}
          alt="도구 이미지"
          width={20}
          height={20}
        />
        <div className={styles['ingredient-name']}>{cocktailTool.name}</div>
      </div>
    </div>
  );
}
