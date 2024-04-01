'use client';

import React, { useEffect } from 'react';
import authStore from '@/store/authStore';
import memberStore from '@/store/memberStore';

interface IToken {
  nickname: string;
  id: number;
  survey_comletion: boolean | null;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}
interface ITokenProps {
  tokens: IToken;
  status: number;
}
export default function Token({ tokens, status }: ITokenProps) {
  const setTokens = authStore((state) => state.setTokens);
  const setInfo = memberStore((state) => state.setMemberStateLogin);
  useEffect(() => {
    setTokens(
      tokens.accessToken,
      tokens.refreshToken,
      tokens.accessTokenExpiresIn,
      tokens.refreshTokenExpiresIn,
    );

    setInfo(tokens.id, tokens.nickname, tokens.survey_comletion || false);
  }, [setInfo, setTokens, tokens]);

  // if (status === 200) {
  //   window.location.replace('/');
  // }
  return status === 200 ? <div>로그인 성공</div> : <div>Token 처리 중...</div>;
}
