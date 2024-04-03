'use client';

import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

import styles from './CustomCocktailModifyButton.module.scss';

interface Props {
  customId: number;
  cocktailId: number;
}

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function CustomCocktailDeleteButton({
  customId,
  cocktailId,
}: Props) {
  const router = useRouter();
  const DeleteClick = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${customId}`,
        {
          method: 'Delete',
          headers: {
            Authorization: token ? `${token}` : '',
          },
        },
      );
      if (response.ok) {
        alert('커스텀 레시피가 삭제되었습니다.');
        router.push(`/cocktail/custom/${cocktailId}`);
      } else {
        console.error('커스텀 레시피 삭제 실패');
      }
    } catch (error) {
      console.log('서버와 통신 중 오류 발생');
      console.log(error);
    }
  };

  return (
    <div>
      <IconButton type="button" onClick={DeleteClick}>
        <DeleteOutlineIcon className={styles.icons} /> &nbsp;삭제
      </IconButton>
    </div>
  );
}
