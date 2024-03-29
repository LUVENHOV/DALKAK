export default function Page({
  params,
  searchParams,
}: {
  params: { provider: string };
  searchParams: { code: string };
}) {
  const { code } = searchParams;
  const { provider } = params;
  return (
    <div>
      <h2>Hello world</h2>
      <h2>{provider}</h2>
      <h2>{code}</h2>
    </div>
  );
}
export async function generateStaticParams() {
  return [{ provider: 'google' }, { provider: 'kakao' }, { provider: 'naver' }];
}
