import React from 'react';
import './OauthButton.scss';
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react';
interface OauthButtonProps {
  provider: string;
  bgcolor: string;
  icon: string;
  text: string;
}
export default function OauthButton({
  provider,
  bgcolor,
  icon,
  text,
}: OauthButtonProps) {
  return (
    <button
      className={`button-oauth ${bgcolor}`}
      type="button"
      onClick={() => {
        if (provider === 'GOOGLE') {
          window.location.href = process.env.NEXT_PUBLIC_OAUTH_GOOGLE_URL as string;
        } else if (provider === 'KAKAO') {
          window.location.href = process.env.NEXT_PUBLIC_OAUTH_KAKAO_URL as string;
        } else if (provider === 'NAVER') {
          window.location.href = process.env.NEXT_PUBLIC_OAUTH_NAVER_URL as string;
        }
      }}
    >
      <img src={icon} alt="not found" />
      <div className="text-field-btn">{text}</div>
    </button>
  );
}
