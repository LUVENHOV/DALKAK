'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import authStore from '@/store/authStore';
// import { button } from '@/app/cocktail/[cocktailId]/page.module.scss';

export default function Page() {
  const param = useSearchParams();
  const [authCode, setAuthCode] = useState('');
  const [result, setResult] = useState({});
  const setAccessToken = authStore((state) => state.actions.setAccessToken);
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
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL as string}/api/oauth/login`, {
        code: authCode,
        provider: 'GOOGLE',
      })
      .then((response) => {
        const res = response.data;
        console.log(res);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        console.log(accessToken);
        console.log(refreshToken);
      })
      .catch((error) => {
        console.log(error);
      });
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
