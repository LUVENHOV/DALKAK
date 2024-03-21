export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  // console.log(cocktailId);

  return <div>{cocktailId}</div>;
}
