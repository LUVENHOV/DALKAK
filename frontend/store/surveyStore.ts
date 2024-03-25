/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const Question = [
  '당신이 궁금해요!',
  '좋아하는 칵테일을 최소 1개 입력해주세요',
  '언제 주로 술을 마시나요?',
  '어떤 베이스 술로 만들어진 칵테일을 원하시나요?',
  '선호하는 도수가 어떻게 되나요?',
  '선호하는 단맛 정도는 어떻게 되나요?',
  '싫어하는 재료가 있나요?',
  '설문조사가 완료되었어요!',
];

interface storeState {
  progress: number;
  nickname: string;
  birthDate: string;
  gender: string;
  surveyCocktails: number[];
  baseId: number;
  occationId: number;
  alcoholContent: number;
  sweatness: number;
  surveyIngredients: number;
  getQuestion: (process: number) => string;
  nextProgress: () => void;
  beforeProgress: () => void;
  setNickname: (nickname: string) => void;
  setBirthDate: (birthDate: string) => void;
  setGender: (gender: string) => void;
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
      nickname: '',
      birthDate: '',
      gender: '',
      surveyCocktails: [],
      baseId: 0,
      occationId: 0,
      alcoholContent: 0,
      sweatness: 0,
      surveyIngredients: 0,

      getQuestion: (process: number) => Question[process],
      // 다음 페이지 이동
      nextProgress: () => {
        if (get().progress < 6) {
          set({ progress: get().progress + 1 });
        }
      },
      // 이전 페이지로 이동
      beforeProgress: () => {
        if (get().progress > 0) {
          set({ progress: get().progress - 1 });
        }
      },
      // set survey states
      setNickname: (nickname: string) => set({ nickname }),
      setBirthDate: (birthDate: string) => set({ birthDate }),
      setGender(gender: string) {
        set({ gender });
      },
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
