import CustomCocktailWriteTest from '@/components/custom-cocktail/write/CustomCocktailWriteTest';
// import { ICocktailType } from '@/type/searchTypes';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);
  return (
    <div>
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
