/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreState {
  id: number;
  nickname: string;
  birthDate: string;
  gender: string;
  isLoggedIn: boolean;
  surveyCompletion: boolean;
  setId: (id: string) => void;
  setNickname: (nickname: string) => void;
  setBirthDate: (birthDate: string) => void;
  setGender: (gender: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setSurveyCompletion: (surveyCompletion: boolean) => void;
  clearAll: () => void;
  setMemberStateLogin: (
    id: number,
    nickname: string,
    surveyCompletion: boolean,
  ) => void;
}

const memberStore = create(
  persist<StoreState>(
    (set) => ({
      // todo : initial state
      id: 0,
      nickname: '',
      birthDate: '',
      gender: '',
      isLoggedIn: true,
      surveyCompletion: false,
      setId: (id: string) => set({ id }),
      setNickname: (nickname: string) => set({ nickname }),
      setBirthDate: (birthDate: string) => set({ birthDate }),
      setGender: (gender: string) => set({ gender }),
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      setSurveyCompletion(surveyCompletion) {
        set({ surveyCompletion });
      },
      clearAll: () =>
        set({
          id: 0,
          nickname: '',
          birthDate: '',
          gender: '',
          isLoggedIn: false,
        }),
      setMemberStateLogin: (
        id: number,
        nickname: string,
        surveyCompletion: boolean,
      ) => {
        set({
          id,
          nickname,
          surveyCompletion,
          isLoggedIn: true,
        });
      },
    }),
    {
      name: 'member',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default memberStore;
