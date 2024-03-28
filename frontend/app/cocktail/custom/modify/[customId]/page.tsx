import React from 'react';

interface ICustomType {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}

export default function Page() {
  return (
    <div>
      <h1>커스텀 칵테일 수정 페이지</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${1}/custom-list?page=${1}`,
    {
      headers: { token },
      next: { tags: ['cocktailList'] },
    },
  );
  const json = await res.json();
  const initialPage = (await json).data.custom_cocktails;
  return initialPage.map((custom: ICustomType) => ({
    customId: custom.id.toString(),
  }));
}
