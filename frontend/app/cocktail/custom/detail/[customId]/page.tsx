/* eslint-disable indent */
import CustomCocktailDetail from '@/components/custom-cocktail/detail/CustomCocktailDetail';

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
  const customIdInt = parseInt(customId, 10);

  return (
    <div>
      <CustomCocktailDetail customId={customIdInt} />
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
  // console.log(initialPage);
  // console.log(initialPage.slice(100));

  return initialPage.map((custom: number) => ({
    customId: custom.toString(),
  }));
}
