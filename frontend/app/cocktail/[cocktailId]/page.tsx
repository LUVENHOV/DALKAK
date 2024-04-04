import CocktailDetail from '@/components/cocktail/CocktailDetail';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);

  return (
    <div>
      <CocktailDetail cocktailId={cocktailIdInt} />
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
