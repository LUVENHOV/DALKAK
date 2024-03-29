import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { Login } from '@/apis/Auth';

export default async function Oauth({
  code,
  provider,
}: {
  code: string;
  provider: string;
}) {
  try {
    const response = await Login({ code, provider: provider.toUpperCase() });
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {/* <h1>인증 코드: {authCode}</h1>
      <button type="button" onClick={handleButtonClick}>
        API 요청 보내기
      </button> */}
    </div>
  );
}
