import CustomCocktailList from '@/components/custom-cocktail/list/CustomCocktailList';
import { ICocktailType } from '@/type/searchTypes';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);
  return (
    <div>
      <CustomCocktailList cocktailId={cocktailIdInt} />
    </div>
  );
}

export async function generateStaticParams() {
  const authorization =
    'Bear eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODg3MzksImV4cCI6MTcxMTc5MjMzOSwiaWQiOjZ9.gf_oCP1VhIvGGq7yQCM7HbRxk1S91v8C6p6mDawoVoE';

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
