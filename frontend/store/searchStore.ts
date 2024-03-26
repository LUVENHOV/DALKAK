import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ISearchType {
  page: number;
  cocktailName: string;
  ingredients: number[];
  base: number;
  minAlcohol: number;
  maxAlcohol: number;
  color: number;
  sweetness: number;
  orderBy: number;
  setPage: (page: number) => void;
  setCocktailName: (cocktailName: string) => void;
  setIngredients: (ingredients: number[]) => void;
  setBase: (base: number) => void;
  setMinAlcohol: (minAlcohol: number) => void;
  setMaxAlcohol: (maxAlcohol: number) => void;
  setColor: (color: number) => void;
  setSweetness: (sweetness: number) => void;
  setOrderBy: (orderBy: number) => void;
  clearAll: () => void;
}

const useSearchStore = create(
  persist<ISearchType>(
    (set) => ({
      page: 1,
      cocktailName: '',
      ingredients: [],
      base: 1,
      minAlcohol: 15,
      maxAlcohol: 35,
      color: 1,
      sweetness: 1,
      orderBy: 3,
      setPage: (page: number) => set({ page }),
      setCocktailName: (cocktailName: string) => set({ cocktailName }),
      setIngredients: (ingredients: number[]) => set({ ingredients }),
      setBase: (base: number) => set({ base }),
      setMinAlcohol: (minAlcohol: number) => set({ minAlcohol }),
      setMaxAlcohol: (maxAlcohol: number) => set({ maxAlcohol }),
      setColor: (color: number) => set({ color }),
      setSweetness: (sweetness: number) => set({ sweetness }),
      setOrderBy: (orderBy: number) => set({ orderBy }),
      clearAll: () =>
        set({
          ingredients: [],
          base: 1,
          minAlcohol: 15,
          maxAlcohol: 35,
          color: 1,
          sweetness: 1,
        }),
    }),
    {
      name: 'searchParams',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSearchStore;
