'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

export default function CustomCocktailModifyButton() {
  const router = useRouter();
  const ModifyClick = () => {
    alert('수정 버튼을 눌렀습니다. 커스텀 칵테일 수정 페이지로 이동합니다');
    router.push('/cocktail/custom/modify/1');
  };
  return (
    <div>
      <button type="button" onClick={ModifyClick}>
        🖍&nbsp;수정
      </button>
    </div>
  );
}
