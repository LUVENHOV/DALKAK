'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
// import { button } from '@/app/cocktail/[cocktailId]/page.module.scss';

export default function Redirection() {
  const param = useSearchParams();
  const [authCode, setAuthCode] = useState('');

  // 컴포넌트가 마운트 될 때 인가 코드를 추출합니다.
  useEffect(() => {
    // URL에서 code 쿼리 파라미터를 가져옵니다.
    console.log('hoho');
    if (param?.get('code')) {
      setAuthCode(encodeURIComponent(param.get('code') as string));
    }
  }, [param]);

  const handleButtonClick = async () => {
    console.log(authCode);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL as string}/api/oauth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: authCode,
            provider: 'NAVER',
            state: 'dalkaknaver',
          }),
        },
      )
        .then((res) => {
          console.log(res.headers.get('access_token'));
        })
        .finally(() => {
          console.log('finally');
        });

      const data = await response?.data;
      console.log(data);
      // 성공적으로 데이터를 받아온 후의 로직을 여기에 구현합니다.
      // 예: 사용자를 다른 페이지로 리다이렉트하기
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div>
      <h1>인증 코드: {authCode}</h1>
      <button type="button" onClick={handleButtonClick}>
        API 요청 보내기
      </button>
    </div>
  );
}
