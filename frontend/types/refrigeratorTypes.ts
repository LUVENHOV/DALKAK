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
  refrigerator: IIngredientType[];
  memo: IIngredientType[];

  getFoodList: () => IIngredientType[];
  getAlcoholList: () => IIngredientType[];
  addRefrList: (ingredient: IIngredientType) => void;
  removeRefrList: (id: number) => void;
  addMemoList: (ingredient: IIngredientType) => void;
  removeMemoList: (id: number) => void;
}
