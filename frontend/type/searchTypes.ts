import { MouseEventHandler } from 'react';
import { IIngredientType } from './refrigeratorTypes';

export interface ISearchType {
  page: number;
  totalPage: number;
  cocktailName: string;
  ingredients: IIngredientType[];
  base: number | null;
  minAlcohol: number;
  maxAlcohol: number;
  color: number | null;
  sweetness: number | null;
  orderBy: number;
  activateSearch: boolean;
  setPage: (page: number) => void;
  setTotalPage: (page: number) => void;
  setCocktailName: (cocktailName: string) => void;
  setBase: (base: number) => void;
  setMinAlcohol: (minAlcohol: number) => void;
  setMaxAlcohol: (maxAlcohol: number) => void;
  setColor: (color: number) => void;
  setSweetness: (sweetness: number) => void;
  setOrderBy: (orderBy: number) => void;
  setActivateSearch: () => void;
  addIngredient: (ingredient: IIngredientType) => void;
  removeIngredient: (ingredient: IIngredientType) => void;
  getIngredients: () => number[];
  clearAll: () => void;
}

export interface ISearchParamsType {
  page: number;
  cocktailName: string;
  base: number | null;
  minAlcohol: number;
  maxAlcohol: number;
  color: number | null;
  sweetness: number | null;
  orderBy: number;
  activateSearch: boolean;
  setTotalPage: (page: number) => void;
  getIngredients: () => number[];
}

export interface ICocktailType {
  id: number;
  name: string;
  korean_name: string;
  image: string;
  heart_count: number;
}
