'use client';

import React from 'react';
import './main.scss';
import OauthButton from '@/components/common/main/OauthButton';

export default function Home() {
  return (
    <div className="mainWrapper">
      <div className="title-main">당신의 칵테일 취향을 DALKAK 열어드릴게요</div>
      <div className="subtitle-main">내가 원하는 칵테일을 찾아볼까요?</div>
      <button className="cocktail-btn" type="button">
        칵테일 찾기
      </button>
      <div className="login-comment">SNS로 간편하게 로그인/회원가입 하기</div>
      <OauthButton
        provider="GOOGLE"
        bgcolor="google"
        icon="../assets/imgs/icon-google.svg"
        text="Sign in with Google"
      />
      <OauthButton
        provider="KAKAO"
        bgcolor="kakao"
        icon="../assets/imgs/icon-kakao.svg"
        text="Sign in with Kakao"
      />
      <OauthButton
        provider="NAVER"
        bgcolor="naver"
        icon="../assets/imgs/icon-naver.svg"
        text="Sign in with Naver"
      />
    </div>
  );
}
