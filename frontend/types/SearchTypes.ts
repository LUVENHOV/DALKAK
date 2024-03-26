export interface ISearchType {
  page: number;
  cocktailName: string;
  ingredients: number[];
  base: number | null;
  minAlcohol: number;
  maxAlcohol: number;
  color: number | null;
  sweetness: number | null;
  orderBy: number;
  activateSearch: boolean;
  setPage: (page: number) => void;
  setCocktailName: (cocktailName: string) => void;
  setIngredients: (ingredients: number[]) => void;
  setBase: (base: number) => void;
  setMinAlcohol: (minAlcohol: number) => void;
  setMaxAlcohol: (maxAlcohol: number) => void;
  setColor: (color: number) => void;
  setSweetness: (sweetness: number) => void;
  setOrderBy: (orderBy: number) => void;
  setActivateSearch: () => void;
  clearAll: () => void;
}

export interface ISearchParamsType {
  page: number;
  cocktailName: string;
  ingredients: number[];
  base: number | null;
  minAlcohol: number;
  maxAlcohol: number;
  color: number | null;
  sweetness: number | null;
  orderBy: number;
  activateSearch: boolean;
}

export interface ICocktailType {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
}
