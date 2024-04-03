import { create } from 'zustand';
import { IIngredientType } from '@/type/refrigeratorTypes';
import { ISearchType } from '@/type/searchTypes';

const useSearchStore = create<ISearchType>((set, get) => ({
  page: 1,
  totalPage: 10,
  cocktailName: '',
  ingredients: [],
  base: null,
  minAlcohol: 1,
  maxAlcohol: 50,
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
  addIngredient: (ingredient: IIngredientType) => {
    if (get().ingredients.includes(ingredient)) {
      return;
    }
    const updatedList = [...get().ingredients, ingredient];
    set({ ingredients: updatedList });
  },
  removeIngredient: (ingredient: IIngredientType) => {
    const updatedList = get().ingredients.filter((i) => i !== ingredient);
    set({ ingredients: updatedList });
  },
  getIngredientsId: () => {
    const onlyId: number[] = [];
    get().ingredients.map((i) => onlyId.push(i.id));
    return onlyId;
  },
  clearAll: () =>
    set({
      ingredients: [],
      base: null,
      minAlcohol: 15,
      maxAlcohol: 35,
      color: null,
      sweetness: null,
    }),
}));

export default useSearchStore;
