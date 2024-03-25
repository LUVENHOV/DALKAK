import axios from 'axios';
// import { useRouter } from 'next/navigation';
// export const getServerSideProps: GetServerSideProps<{ loading: boolean; responseData: any }> = (async (context) => {
//   const code = context.query.code;
//   let loading = true;
//   let responseData = null;
//   if (code) {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/login`, {
//         code,
//         provider: 'GOOGLE',
//       });

//       responseData = response.data;
//       loading = false;
//     } catch (error) {
//       console.error(error);
//       loading = false;
//     }
//   } else {
//     loading = false;
//   }

//   return {
//     props: { loading, responseData },
//   };
// }) as GetServerSideProps<{ loading: boolean; responseData: any }>;

// const page = ({ loading, responseData }: { loading: boolean; responseData: any }) => {
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   console.log(responseData);

//   return (
//     <div>
//       <h1>인증 완료</h1>
//     </div>
//   );
// };
export async function getServerSideProps(context) {
  // 서버 사이드에서 쿼리 파라미터에 접근
  const { query } = context;
  const { code } = query;

  // 여기서 code를 사용해 백엔드와 통신하여 토큰을 받아올 수 있습니다.
  // 필요한 추가 처리를 여기서 수행할 수 있습니다.

  // 최종적으로 페이지 컴포넌트로 props를 전달
  return {
    props: {
      code
    },
  };
}
export async function generateStaticParams(){
  const providers = [
    { id: 'google' },
    { id: 'kakao' },
    { id: 'naver' },
  ];

  return providers.map((providers) => ({
    provider: providers.id.toString(),
  }));
}
export default function Page({ params}: { params: { provider: string }}) {
  return (
    <div>
      <h1>{params.provider}</h1>
      {/* <h2>{searchParams}</h2> */}
    </div>
  );
};