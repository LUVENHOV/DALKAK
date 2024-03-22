import CustomCocktailDetail from '@/components/custom-cocktail/detail/CustomCocktailDetail';

interface Props {
  customId: string;
}

export default function Page({ customId }: Props) {
  return (
    <div>
      <CustomCocktailDetail customId={customId} />
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
    customId: cocktail.id.toString(),
  }));
}
