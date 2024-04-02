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

const token = process.env.NEXT_PUBLIC_TOKEN;

export async function generateStaticParams() {
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
