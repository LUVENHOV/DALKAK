/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface storeState {
  progress: number;
  surveyCocktails: number[];
  baseId: number;
  occationId: number;
  alcoholContent: number;
  sweatness: number;
  surveyIngredients: number;
  nextProgress: () => void;
  beforeProgress: () => void;
  setSurveyCocktails: (cocktails: number[]) => void;
  setBaseId: (baseId: number) => void;
  setOccationId: (occationId: number) => void;
  setAlcoholContent: (alcoholContent: number) => void;
  setSweatness: (sweatness: number) => void;
  setSurveyIngredients: (surveyIngredients: number) => void;
  clearSurvey: () => void;
}

const surveyStore = create(
  persist<storeState>(
    (set, get) => ({
      progress: 0,
      surveyCocktails: [],
      baseId: 0,
      occationId: 0,
      alcoholContent: 0,
      sweatness: 0,
      surveyIngredients: 0,
      // 다음 페이지 이동
      nextProgress: () => set({ progress: get().progress + 1 }),
      // 이전 페이지로 이동
      beforeProgress: () => set({ progress: get().progress - 1 }),

      // set survey states
      setSurveyCocktails: (cocktails: number[]) =>
        set({ surveyCocktails: cocktails }),
      setBaseId: (baseId: number) => set({ baseId }),
      setOccationId: (occationId: number) => set({ occationId }),
      setAlcoholContent: (alcoholContent: number) => set({ alcoholContent }),
      setSweatness: (sweatness: number) => set({ sweatness }),
      setSurveyIngredients: (surveyIngredients: number) =>
        set({ surveyIngredients }),
      clearSurvey: () =>
        set({
          progress: 0,
          surveyCocktails: [],
          baseId: 0,
          occationId: 0,
          alcoholContent: 0,
          sweatness: 0,
          surveyIngredients: 0,
        }),
    }),
    {
      name: 'survey',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
export default surveyStore;
