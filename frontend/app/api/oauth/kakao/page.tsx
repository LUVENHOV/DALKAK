'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import authStore from '@/store/authStore';
import { ResponseData } from '../../types';
import { AuthResponse } from '../../types';

export default function Page() {
  const param = useSearchParams();
  const [result, setResult] = useState({});
  const setAccessToken = authStore((state) => state.setAccessToken);
  const setRefreshToken = authStore((state) => state.setRefreshToken);
  const clearTokens = authStore((state) => state.clearTokens);

  useEffect(() => {
    if (param?.get('code')) {
      const querycode = encodeURIComponent(param.get('code') as string);
      authorization(encodeURIComponent(param.get('code') as string));
    }
  }, [param]);

  const authorization = async (authCode: string) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL as string}/oauth/login`, {
        code: authCode,
        provider: 'KAKAO',
      })
      .then((response) => {
        console.log(response.data);
        const res = response.data as AuthResponse;
        const data = res.data as ResponseData;
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        console.log(authStore.getState().accessToken);
        window.opener.postMessage(
          {
            type: 'LOGIN_SUCCESS',
            data: {},
          },
          '*',
        );
        window.close();
      })
      .catch((error) => {
        console.log(error);
        // 창 닫고 다시 로그인 페이지로 이동
      });
  };

  return (
    <div>
      {/* <h1>인증 코드: {authCode}</h1>
      <button type="button" onClick={handleButtonClick}>
        API 요청 보내기
      </button> */}
    </div>
  );
}
