import React from 'react';

// interface ICustomType {
//   id: number;
//   image: string;
//   name: string;
//   summary: string;
//   user: {
//     id: number;
//     nickname: string;
//   };
// }

export default function Page({ params }: { params: { customId: string } }) {
  const { customId } = params;
  return (
    <div>
      <h1>{customId} 커스텀 칵테일 수정 페이지</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

  const json = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/custom-list`,
    {
      headers: { authorization },
    },
  ).then((res) => res.json());

  const initialPage = (await json).data.customIdList;

  return initialPage.map((custom: number) => ({
    customId: custom.toString(),
  }));
}
