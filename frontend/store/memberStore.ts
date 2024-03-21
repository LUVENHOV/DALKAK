/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreState {
  id: string;
  nickname: string;
  birthDate: string;
  gender: 'male' | 'female' | '';
  isLoggedIn: boolean;
}
const memberStore = create(
  persist<StoreState>(
    (set) => ({
      id: '',
      nickname: '',
      birthDate: '',
      gender: '',
      isLoggedIn: false,
      actions: {
        setId: (id: string) => set({ id }),
        setNickname: (nickname: string) => set({ nickname }),
        setBirthDate: (birthDate: string) => set({ birthDate }),
        setGender: (gender: 'male' | 'female') => set({ gender }),
        clearAll: () =>
          set({
            id: '',
            nickname: '',
            birthDate: '',
            gender: '',
            isLoggedIn: false,
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
