import $Fetch from './common';
import authStore from '@/store/authStore';

interface OauthProps {
  code: string;
  provider: string;
}

const OauthURL = `${process.env.NEXT_PUBLIC_BASE_URL as string}/oauth`;
const getAccessToken = () => authStore.getState().accessToken;

// Login
const Login = ({ code, provider }: OauthProps) =>
  $Fetch('POST', `${OauthURL}/login`, '', { code, provider });

// Logout
const Logout = () => $Fetch('GET', `${OauthURL}/logout`, getAccessToken());
export { Login, Logout };
