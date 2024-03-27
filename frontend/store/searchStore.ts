import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ISearchType } from '@/type/searchTypes';

const useSearchStore = create(
  persist<ISearchType>(
    (set, get) => ({
      page: 1,
      totalPage: 10,
      cocktailName: '',
      ingredients: [],
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
      setIngredients: (ingredients: number[]) => set({ ingredients }),
      setBase: (base: number) => set({ base }),
      setMinAlcohol: (minAlcohol: number) => set({ minAlcohol }),
      setMaxAlcohol: (maxAlcohol: number) => set({ maxAlcohol }),
      setColor: (color: number) => set({ color }),
      setSweetness: (sweetness: number) => set({ sweetness }),
      setOrderBy: (orderBy: number) => set({ orderBy }),
      setActivateSearch: () => {
        set({ activateSearch: !get().activateSearch });
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
    }),
    {
      name: 'searchParams',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSearchStore;
