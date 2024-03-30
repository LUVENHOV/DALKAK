import CustomCocktailDetail from '@/components/custom-cocktail/detail/CustomCocktailDetail';

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

export default function Page({ params }: { params: { customId: string } }) {
  const { customId } = params;
  const customIdInt = parseInt(customId, 10);

  return (
    <div>
      <CustomCocktailDetail customId={customIdInt} />
    </div>
  );
}

// export async function generateStaticParams() {
//   const authorization =
//     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/customs/${1}/custom-list?page=${1}`,
//     {
//       headers: { authorization },
//       next: { tags: ['cocktailList'] },
//     },
//   );
//   const json = await res.json();
//   const initialPage = (await json).data.custom_cocktails;
//   return initialPage.map((custom: ICustomType) => ({
//     customId: custom.id.toString(),
//   }));
// }

const token = process.env.NEXT_PUBLIC_TOKEN;

export async function generateStaticParams() {
  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

  const json = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/customs/custom-list`,
    {
      // 분명 같은 토큰인데 왜 어쩔때는 위에 코드가 안되고
      // 어쩔때는 아래 코드가 안 되는 건지 모르겠음...
      headers: {
        Authorization: token ? `${token}` : '',
        // Authorization: `${authorization}`,
      },
    },
  ).then((res) => res.json());

  const initialPage = (await json).data.customIdList;

  return initialPage.map((custom: number) => ({
    customId: custom.toString(),
  }));
}
