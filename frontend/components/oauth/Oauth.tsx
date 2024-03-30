// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import { useRouter } from 'next/router';
import Token from './Token';
import { Login } from '@/apis/Auth';

interface IToken{
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}
export default async function Oauth({
  code,
  provider,
}: {
  code: string;
  provider: string;
}) {
  let tokens: IToken = {
    accessToken: '',
    refreshToken: '',
    accessTokenExpiresIn: 0,
    refreshTokenExpiresIn: 0,
  };
  try {
    const response = await Login({ code, provider: provider.toUpperCase() });
    if (response.status === 200) {
      const responseData = await response.json();
      const {data} = responseData;

      console.log(responseData.data);
      tokens = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        accessTokenExpiresIn: data.accessTokenExpiresIn,
        refreshTokenExpiresIn: data.refreshTokenExpiresIn,
      };
      console.log(tokens);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <Token tokens={tokens} />
  );
}
