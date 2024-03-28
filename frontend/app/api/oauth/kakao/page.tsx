'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { ResponseData, AuthResponse } from '../../types';
import { Login } from '@/apis/Member';
import authStore from '@/store/authStore';
import memberStore from '@/store/memberStore';

export default function Page() {
  const param = useSearchParams();
  const setAccessToken = authStore((state) => state.setAccessToken);
  const setRefreshToken = authStore((state) => state.setRefreshToken);
  const setMemberStateLogin = memberStore((state) => state.setMemberStateLogin);

  const authorization = async (authCode: string) => {
    try {
      const response = await Login({ code: authCode, provider: 'GOOGLE' });
      if (response.status === 200) {
        const responseData = await response.json();
        const { accessToken, refreshToken } = responseData.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        setMemberStateLogin(
          responseData.data.id,
          responseData.data.nickname,
          responseData.data.survey_completion ?? false,
        );
        window.opener.postMessage(
          {
            type: 'LOGIN_SUCCESS',
            data: {},
          },
          '*',
        );
        window.close();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // await axios
  //   .post(`${process.env.NEXT_PUBLIC_BASE_URL as string}/oauth/login`, {
  //     code: authCode,
  //     provider: 'KAKAO',
  //   })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log(response.data);
  //       const res = response.data as AuthResponse;
  //       const data = res.data as ResponseData;
  //       const { accessToken } = data;
  //       const { refreshToken } = data;

  //       setAccessToken(accessToken);
  //       setRefreshToken(refreshToken);
  //       console.log(authStore.getState().accessToken);

  //       setMemberStateLogin(
  //         data.id,
  //         data.nickname,
  //         data.survey_completion ?? false,
  //       );
  //       window.opener.postMessage(
  //         {
  //           type: 'LOGIN_SUCCESS',
  //           data: {},
  //         },
  //         '*',
  //       );
  //       window.close();
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     // 창 닫고 다시 로그인 페이지로 이동
  //   });

  useEffect(() => {
    if (param?.get('code')) {
      console.log('yeaahhh');
      authorization(encodeURIComponent(param.get('code') as string));
    } else {
      console.log('naaah');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return (
    <div>
      {/* <h1>인증 코드: {authCode}</h1>
      <button type="button" onClick={handleButtonClick}>
        API 요청 보내기
      </button> */}
    </div>
  );
}
