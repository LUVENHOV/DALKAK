import $Fetch from './common';
import authStore from '@/store/authStore';

interface SubmitSurveryProps {
  survey_cocktails: number[];
  occasion_id: number;
  base_id: number;
  alcohol_content: number;
  sweetness: number;
  survey_ingredients: number[];
}
const URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const getAccessToken = () => authStore.getState().accessToken;

const withdrawal = () => $Fetch('DELETE', `${URL}/users`, getAccessToken());

const submitSurvey = (survey: SubmitSurveryProps) =>
  $Fetch('POST', `${URL}/users/survey`, getAccessToken(), {}, survey);

const getProfile = () =>
  $Fetch('GET', `${URL}/users/profile`, getAccessToken());

const patchProfile = (profile: {
  nickname: string;
  birth_date: string;
  gender: string;
}) => $Fetch('PATCH', `${URL}/users/profile`, getAccessToken(), {}, profile);

const duplicateCheck = (nickname: string) => {
  $Fetch('POST', `${URL}/users/profile/dupcheck`, '', {}, { nickname });
};
const getLikeCocktail = (page: number) => {
  $Fetch(
    'GET',
    `${URL}/users/profile/heart-list`,
    getAccessToken(),
    {},
    { page },
  );
};
const getMyCustomCocktail = (page: number) => {
  $Fetch(
    'GET',
    `${URL}/users/profile/custom-recipe-list`,
    getAccessToken(),
    {},
    { page },
  );
};
const getRecommendCocktail = (page: number) => {
  $Fetch(
    'GET',
    `${URL}/users/profile/recommend-list`,
    getAccessToken(),
    {},
    {
      page,
    },
  );
};
export {
  withdrawal,
  submitSurvey,
  getProfile,
  patchProfile,
  duplicateCheck,
  getLikeCocktail,
  getMyCustomCocktail,
  getRecommendCocktail,
};
