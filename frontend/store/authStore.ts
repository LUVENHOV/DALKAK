/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface storeState {
 accessToken: string;
 refreshToken: string;
}

const memberStore = create(
  persist<storeState>(
    (set, get) => ({
      accessToken: '',
      refreshToken: '',
      actions: {
        setAccessToken: (accessToken: string) =>
          set({ accessToken });,
        setRefreshToken: (refreshToken: string) => 
          set({ refreshToken });,
        clearTokens: () =>
          set({
            accessToken: '',
            refreshToken: '',
          }),
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
export default memberStore;
