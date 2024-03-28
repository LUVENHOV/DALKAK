import CocktailDetail from '@/components/cocktail/CocktailDetail';
import { ICocktailType } from '@/type/searchTypes';

// export const dynamic = 'force-static';

// export const dynamicParams = false;
// const token = process.env.NEXT_PUBLIC_TOKEN;

// interface Unit {
//   id: number;
//   name: string;
// }

// interface Cocktail_Ingredients {
//   id: number;
//   name: string;
//   image: string;
//   category_id: number;
//   amount: number;
//   unit: Unit;
// }

// interface Cocktail_Tools {
//   id: number;
//   name: string;
//   image: string;
// }

// interface Custom_Cocktails {
//   id: number;
//   image: string;
//   name: string;
//   summary: string;
//   user: {
//     id: number;
//     nickname: string;
//   };
// }

// interface Data {
//   id: number;
//   name: string;
//   korean_name: string;
//   image: string;
//   heart_count: number;
//   view_count: number;
//   alcohol_content: number;
//   sweetness: number;
//   recipe: string;
//   cocktail_ingredients: Cocktail_Ingredients[];
//   cocktail_tools: Cocktail_Tools[];
//   custom_cocktails: Custom_Cocktails[];
// }

// interface ApiResponse {
//   code: number;
//   messages: string[];
//   data: Data;
// }

// eslint-disable-next-line consistent-return
// export async function generateStaticParams({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;

//   return {
//     id: params.toString(),
//   };
// }

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);
  // const cocktailData = await generateStaticParams({ params });

  return (
    <div>
      <CocktailDetail cocktailId={cocktailIdInt} />
    </div>
  );
}

export async function generateStaticParams() {
  const authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTEzMjkwNDUsImV4cCI6MTcxMTc2MTA0NSwiaWQiOjN9.zcY6r5AdHWBddd-sUz8oFdGV14DZLLyXi_5-BG--C20';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cocktails/search?page=${1}&orderBy=${3}`,
    {
      headers: { authorization },
      next: { tags: ['cocktailList'] },
    },
  );
  const json = await res.json();
  const initialPage = (await json).data.cocktails;
  return initialPage.map((cocktail: ICocktailType) => ({
    cocktailId: cocktail.id.toString(),
  }));
}
