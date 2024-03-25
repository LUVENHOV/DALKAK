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
}

const searchStore = create(
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

      actions: {
        setPage: (page: number) => set({ page }),
        setCocktailName: (cocktailName: string) => set({ cocktailName }),
        setIngredients: (ingredients: number[]) => set({ ingredients }),
        setBase: (base: number) => set({ base }),
        setMinAlcohol: (minAlcohol: number) => set({ minAlcohol }),
        setMaxAlcohol: (maxAlcohol: number) => set({ maxAlcohol }),
        setColor: (color: number) => set({ color }),
        setSweetnesse: (sweetness: number) => set({ sweetness }),
        setOrderBy: (orderBy: number) => set({ orderBy }),
        clearAll: () =>
          set({
            page: 1,
            cocktailName: '',
            ingredients: [],
            base: 1,
            minAlcohol: 15,
            maxAlcohol: 35,
            color: 1,
            sweetness: 1,
            orderBy: 3,
          }),
      },
    }),
    {
      name: 'searchParams',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default searchStore;
