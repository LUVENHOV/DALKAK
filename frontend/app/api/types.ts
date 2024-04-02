type ResponseData = {
  accessToken: string;
  accessTokenExpiresIn: number;
  id: number;
  nickname: string;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  survey_completion: boolean | null;
};
type AuthResponse = {
  code: number;
  data: ResponseData;
  message: Array<string>;
};

export type { AuthResponse, ResponseData };
