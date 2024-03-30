'use client';

import React from 'react';
import { useEffect } from 'react';
import authStore from '@/store/authStore';

interface IToken{
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
}
interface ITokenProps {
  tokens: IToken;
}
export default function Token({
  tokens } : ITokenProps) {
  const setTokens = authStore((state) => state.setTokens);
  useEffect(() => {
    setTokens(
      tokens.accessToken,
      tokens.refreshToken,
      tokens.accessTokenExpiresIn,
      tokens.refreshTokenExpiresIn,
    );
  }, [setTokens, tokens]);

  return <div>Token 처리 중...</div>;
}
