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

  const openPopupWindow = (url: string, width: number = 600, height: number = 700) => {
    const y = window.top.outerHeight / 2 + window.top.screenY - (height / 2);
    const x = window.top.outerWidth / 2 + window.top.screenX - (width / 2);

    window.open(url, provider, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=${width}, height=${height}, top=${y}, left=${x}`);
  };

  return (
    <button
      className={`button-oauth ${bgcolor}`}
      type="button"
      onClick={() => {
        let url = '';
        if (provider === 'GOOGLE') {
          url = process.env.NEXT_PUBLIC_OAUTH_GOOGLE_URL as string;
        } else if (provider === 'KAKAO') {
          url = process.env.NEXT_PUBLIC_OAUTH_KAKAO_URL as string;
        } else if (provider === 'NAVER') {
          url = process.env.NEXT_PUBLIC_OAUTH_NAVER_URL as string;
        }
        if (url) {
          openPopupWindow(url)
        }
      }}
    >
      <img src={icon} alt="not found" />
      <div className="text-field-btn">{text}</div>
    </button>
  );
}
