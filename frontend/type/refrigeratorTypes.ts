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

  addRefrList: (ingredient: IIngredientType) => void;
  removeRefrList: (ingredient: IIngredientType) => void;
  addMemoList: (ingredient: IIngredientType) => void;
  removeMemoList: (ingredient: IIngredientType) => void;
}
