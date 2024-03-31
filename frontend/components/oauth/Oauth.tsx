import { redirect } from 'next/navigation';
import Token from './Token';
import { Login } from '@/apis/Auth';

interface IToken{
  nickname: string,
  id: number,
  survey_comletion: boolean|null;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

// export async function getServerSideProps({ res }) {
//   res.writeHead(302, { Location: '/' });
//   res.end();

//   return {
//     props: {},
//   };
// }
export default async function Oauth({
  code,
  provider,
}: {
  code: string;
  provider: string;
}) {
  let tokens: IToken = {
    nickname: '',
    id: 0,
    survey_comletion: null,
    accessToken: '',
    refreshToken: '',
    accessTokenExpiresIn: 0,
    refreshTokenExpiresIn: 0,
  };
  let status = 0;
  try {
    const response = await Login({ code, provider: provider.toUpperCase() });
    status = response.status;
    if (response.status === 200) {
      const responseData = await response.json();
      const { data } = responseData;

      console.log(responseData.data);

      tokens = {
        nickname: data.nickname,
        id: data.id,
        survey_comletion: data.survey_completion,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        accessTokenExpiresIn: data.accessTokenExpiresIn,
        refreshTokenExpiresIn: data.refreshTokenExpiresIn,
      };

      if (data.survey_comletion === null) {
        alert('정보 입력이 되지 않아 정보 입력 페이지로 이동합니다.')
        redirect('/survey');
      }
      console.log(tokens);
      redirect('/');
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <Token tokens={tokens} status={status} />
  );
}
