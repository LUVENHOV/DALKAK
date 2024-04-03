'use client';

import React from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

import styles from './CustomCocktailModifyButton.module.scss';

interface Props {
  customId: number;
}

export default function CustomCocktailModifyButton({ customId }: Props) {
  const router = useRouter();
  const ModifyClick = () => {
    alert('수정 버튼을 눌렀습니다. 커스텀 칵테일 수정 페이지로 이동합니다');
    router.push(`/cocktail/custom/modify/${customId}`);
  };
  return (
    <div>
      <IconButton type="button" onClick={ModifyClick}>
        <ModeIcon className={styles.icons} /> &nbsp;수정
      </IconButton>
    </div>
  );
}
