export interface IIngredientType {
  id: number;
  name: string;
  image: string;
  category: {
    id: number;
    name: string;
  };
}

export interface IRefrigeratorType {
  refgList: IIngredientType[];
  memoList: IIngredientType[];

  setRefgList: () => void;
  setMemoList: () => void;
  addRefrList: (id: number) => void;
  removeRefrList: (id: number | IIngredientType) => void;
  addMemoList: (id: number) => void;
  removeMemoList: (id: number | IIngredientType) => void;
  memoToRefr: (id: number) => void;
  refrToMemo: (id: number) => void;
}
