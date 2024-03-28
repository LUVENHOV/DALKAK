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

// Byebye
const withdrawal = () => $Fetch('DELETE', `${URL}/users`, getAccessToken());

const submitSurvey = (survey: SubmitSurveryProps) =>
  $Fetch('POST', `${URL}/users/survey`, getAccessToken(), {}, survey);

export { withdrawal, submitSurvey };
