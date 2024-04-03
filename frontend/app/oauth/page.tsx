import React from 'react';

import './main.scss';
import OauthButton from '@/components/common/main/OauthButton';

export default function page() {
  return (
    <div className="mainWrapper">
      <div className="title-main">당신의 칵테일 취향을 DALKAK 열어드릴게요</div>
      <div className="subtitle-main">내가 원하는 칵테일을 찾아볼까요?</div>
      <div className="login-comment">SNS로 간편하게 로그인/회원가입 하기</div>
      <div className="oauth-buttons">
        <OauthButton
          provider="GOOGLE"
          bgcolor="google"
          icon="../assets/imgs/icon-google.svg"
        />
        <OauthButton
          provider="KAKAO"
          bgcolor="kakao"
          icon="../assets/imgs/icon-kakao.svg"
        />
        <OauthButton
          provider="NAVER"
          bgcolor="naver"
          icon="../assets/imgs/icon-naver.svg"
        />
      </div>
    </div>
  );
}
