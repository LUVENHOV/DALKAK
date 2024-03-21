import React from 'react';

import styles from './CustomCocktailImage.module.scss';

interface Props {
  customImage: string;
}

export default function CustomCocktailImage({ customImage }: Props) {
  return (
    <div>
      <img
        className={styles['custom-img']}
        src={customImage}
        alt="커스텀 칵테일 이미지"
      />
    </div>
  );
}
