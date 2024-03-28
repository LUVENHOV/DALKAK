/* eslint-disable implicit-arrow-linebreak */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface storeState {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
  setAccessToken: (receivedAccessToken: string) => void;
  getAccessToken: () => string;
  setRefreshToken: (receivedRefreshToken: string) => void;
  getRefreshToken: () => string;
  setAccessTokenExpiresIn: (receivedAccessTokenExpiresIn: number) => void;
  setRefreshTokenExpiresIn: (receivedRefreshTokenExpiresIn: number) => void;
  setTokens: (
    receivedAccessToken: string,
    receivedRefreshToken: string,
    receivedAccessTokenExpiresIn: number,
    receivedRefreshTokenExpiresIn: number,
  ) => void;
  clearTokens: () => void;
}

const authStore = create(
  persist<storeState>(
    (set, get) => ({
      accessToken: '',
      refreshToken: '',
      accessTokenExpiresIn: 0,
      refreshTokenExpiresIn: 0,
      setAccessToken: (receivedAccessToken: string) =>
        set({ accessToken: `Bearer ${receivedAccessToken}` }),
      getAccessToken: () => get().accessToken,
      setRefreshToken: (receivedRefreshToken: string) =>
        set({ refreshToken: `Bearer ${receivedRefreshToken}` }),
      getRefreshToken: () => get().refreshToken,
      setAccessTokenExpiresIn(receivedAccessTokenExpiresIn) {
        set({ accessTokenExpiresIn: receivedAccessTokenExpiresIn });
      },
      setRefreshTokenExpiresIn(receivedRefreshTokenExpiresIn) {
        set({ refreshTokenExpiresIn: receivedRefreshTokenExpiresIn });
      },
      setTokens: (
        receivedAccessToken: string,
        receivedRefreshToken: string,
        receivedAccessTokenExpiresIn: number,
        receivedRefreshTokenExpiresIn: number,
      ) => {
        set({
          accessToken: `Bearer ${receivedAccessToken}`,
          refreshToken: `Bearer ${receivedRefreshToken}`,
          accessTokenExpiresIn: receivedAccessTokenExpiresIn,
          refreshTokenExpiresIn: receivedRefreshTokenExpiresIn,
        });
      },
      clearTokens: () => set({ accessToken: '', refreshToken: '' }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
export default authStore;
