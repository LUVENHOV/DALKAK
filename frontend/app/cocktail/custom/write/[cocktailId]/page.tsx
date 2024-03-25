import CustomCocktailWrite from '@/components/custom-cocktail/write/CustomCocktailWrite';

interface Props {
  cocktailId: string;
}

export default function Page({ cocktailId }: Props) {
  return (
    <div>
      <CustomCocktailWrite cocktailId={cocktailId} />
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
