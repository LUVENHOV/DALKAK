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
    router.push(`/cocktail/modify?id=${customId}`);
  };
  return (
    <div>
      <IconButton type="button" onClick={ModifyClick}>
        <ModeIcon className={styles.icons} /> &nbsp;수정
      </IconButton>
    </div>
  );
}
