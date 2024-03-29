import Oauth from '@/components/oauth/Oauth';

export default function Page({
  params,
  searchParams,
}: {
  params: { provider: string };
  searchParams: { code: string };
}) {
  const { code } = searchParams;
  const { provider } = params;
  return Oauth({ code, provider });
}
export async function generateStaticParams() {
  return [{ provider: 'google' }, { provider: 'kakao' }, { provider: 'naver' }];
}
