/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface MemberActions {
  setId: (id: string) => void;
  setNickname: (nickname: string) => void;
  setBirthDate: (birthDate: string) => void;
  setGender: (gender: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clearAll: () => void;
  tmp: () => void;
}

interface StoreState {
  actions: MemberActions;
  id: string;
  nickname: string;
  birthDate: string;
  gender: string;
  isLoggedIn: boolean;
}

const memberStore = create(
  persist<StoreState>(
    (set) => ({
      id: '',
      nickname: '',
      birthDate: '',
      gender: '',
      isLoggedIn: true,
      actions: {
        setId: (id: string) => set({ id }),
        setNickname: (nickname: string) => set({ nickname }),
        setBirthDate: (birthDate: string) => set({ birthDate }),
        setGender: (gender: string) => set({ gender }),
        setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
        clearAll: () =>
          set({
            id: '',
            nickname: '',
            birthDate: '',
            gender: '',
            isLoggedIn: false,
          }),

        tmp: () =>
          set({
            id: 'tmp',
            nickname: '김형진',
            birthDate: '1998-01-17 ',
            gender: 'male',
            isLoggedIn: true,
          }),
      },
    }),
    {
      name: 'member',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default memberStore;

