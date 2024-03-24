/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface storeState {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (receivedAccessToken: string) => void;
  setRefreshToken: (receivedRefreshToken: string) => void;
  clearTokens: () => void;
}

const authStore = create(
  persist<storeState>(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      setAccessToken: (receivedAccessToken: string) => set({ accessToken: `Bearer ${receivedAccessToken}` }),
      setRefreshToken: (receivedRefreshToken: string) => set({ refreshToken: `Bearer ${receivedRefreshToken}` }),
      clearTokens: () => set({ accessToken: '', refreshToken: '' }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
export default authStore;
