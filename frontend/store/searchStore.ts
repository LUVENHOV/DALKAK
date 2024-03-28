import { create } from 'zustand';
import { IIngredientType } from '@/type/refrigeratorTypes';
import { ISearchType } from '@/type/searchTypes';

const useSearchStore = create<ISearchType>((set, get) => ({
  page: 1,
  totalPage: 10,
  cocktailName: '',
  ingredients: new Set(),
  base: null,
  minAlcohol: 15,
  maxAlcohol: 35,
  color: null,
  sweetness: null,
  orderBy: 3,
  activateSearch: false,
  setPage: (page: number) => set({ page }),
  setTotalPage: (totalPage: number) => set({ totalPage }),
  setCocktailName: (cocktailName: string) => set({ cocktailName }),
  setBase: (base: number) => set({ base }),
  setMinAlcohol: (minAlcohol: number) => set({ minAlcohol }),
  setMaxAlcohol: (maxAlcohol: number) => set({ maxAlcohol }),
  setColor: (color: number) => set({ color }),
  setSweetness: (sweetness: number) => set({ sweetness }),
  setOrderBy: (orderBy: number) => set({ orderBy }),
  setActivateSearch: () => {
    set({ activateSearch: !get().activateSearch });
  },
  addIngredient: (ingredient: IIngredientType) =>
    set({
      ingredients: new Set(get().ingredients.add(ingredient)),
    }),
  removeIngredient: (ingredient: IIngredientType) => {
    const updatedSet = new Set(get().ingredients);
    updatedSet.delete(ingredient);
    set({ ingredients: new Set(updatedSet) });
  },
  getIngredientsId: () => {
    const onlyId: number[] = [];
    Array.from(get().ingredients).map((i) => onlyId.push(i.id));
    return onlyId;
  },
  clearAll: () =>
    set({
      ingredients: new Set(),
      base: null,
      minAlcohol: 15,
      maxAlcohol: 35,
      color: null,
      sweetness: null,
    }),
}));

export default useSearchStore;
