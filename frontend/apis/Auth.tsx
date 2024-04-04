import $Fetch from './common';
import authStore from '@/store/authStore';

interface OauthProps {
  code: string;
  provider: string;
}

const URL = process.env.NEXT_PUBLIC_BASE_URL as string;
const getAccessToken = () => authStore.getState().accessToken;

// Login
const Login = ({ code, provider }: OauthProps) =>
  $Fetch('POST', `${URL}/oauth/login`, '', {}, { code, provider });

// Logout
const Logout = () => $Fetch('GET', `${URL}/oauth/logout`, getAccessToken());

export { Login, Logout };
