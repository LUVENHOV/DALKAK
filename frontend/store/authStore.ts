/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface actionState {
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearTokens: () => void;
}
interface storeState {
  accessToken: string;
  refreshToken: string;
  actions: actionState;
}

const authStore = create(
  persist<storeState>(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      actions: {
        setAccessToken: (accessToken: string) => set({ accessToken }),
        setRefreshToken: (refreshToken: string) => set({ refreshToken }),
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
export default authStore;
