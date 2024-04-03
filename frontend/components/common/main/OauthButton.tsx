'use client';

import React from 'react';
import './OauthButton.scss';

interface OauthButtonProps {
  provider: string;
  bgcolor: string;
  icon: string;
}
export default function OauthButton({
  provider,
  bgcolor,
  icon,
}: OauthButtonProps) {
  return (
    <button
      className={`button-oauth ${bgcolor}`}
      type="button"
      onClick={() => {
        if (provider === 'GOOGLE') {
          // eslint-disable-next-line no-restricted-globals
          location.href = process.env.NEXT_PUBLIC_OAUTH_GOOGLE_URL as string;
        } else if (provider === 'KAKAO') {
          // eslint-disable-next-line no-restricted-globals
          location.href = process.env.NEXT_PUBLIC_OAUTH_KAKAO_URL as string;
        } else if (provider === 'NAVER') {
          // eslint-disable-next-line no-restricted-globals
          location.href = process.env.NEXT_PUBLIC_OAUTH_NAVER_URL as string;
        }
      }}
    >
      <img src={icon} alt="not found" />
      {/* <div className="text-field-btn">{text}</div> */}
    </button>
  );
}
