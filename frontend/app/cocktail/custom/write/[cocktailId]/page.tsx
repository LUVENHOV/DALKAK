import CustomCocktailWrite from '@/components/custom-cocktail/write/CustomCocktailWrite';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  const cocktailIdInt = parseInt(cocktailId, 10);
  return (
    <div>
      <CustomCocktailWrite cocktailId={cocktailIdInt} />
    </div>
  );
}

export async function generateStaticParams() {
  const dummyCocktailId = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return dummyCocktailId.map((cocktail) => ({
    cocktailId: cocktail.id.toString(),
  }));
}
