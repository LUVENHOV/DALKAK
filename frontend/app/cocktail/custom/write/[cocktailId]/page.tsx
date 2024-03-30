import CustomCocktailWrite from '@/components/custom-cocktail/write/CustomCocktailWrite';
import CustomCocktailWriteTest from '@/components/custom-cocktail/write/CustomCocktailWriteTest';
import { ICocktailType } from '@/type/searchTypes';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);
  return (
    <div>
      {/* <div>
        <CustomCocktailWrite cocktailId={cocktailIdInt} />
      </div> */}
      <div>
        <CustomCocktailWriteTest cocktailId={cocktailIdInt} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const staticParamList = [];
  for (let i = 1; i <= 3165; i += 1) {
    staticParamList.push({ cocktailId: i.toString() });
  }
  return staticParamList;
}

// export async function generateStaticParams() {
//   const authorization =
//     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${1}&orderBy=${3}`,
//     {
//       headers: { authorization },
//       next: { tags: ['cocktailList'] },
//     },
//   );
//   const json = await res.json();
//   const initialPage = (await json).data.cocktails;
//   return initialPage.map((cocktail: ICocktailType) => ({
//     cocktailId: cocktail.id.toString(),
//   }));
// }
