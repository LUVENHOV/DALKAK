'use client';

import React, { useEffect } from 'react';

import surveyStore from '../../store/surveyStore';
import authStore from '@/store/authStore';
import { submitSurvey } from '@/apis/Member';

import './page.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const progress = surveyStore((state) => state.progress);
  const getQuestion = surveyStore((state) => state.getQuestion);
  const nextProgress = surveyStore((state) => state.nextProgress);
  const beforeProgress = surveyStore((state) => state.beforeProgress);
  const [fadeOut, setFadeOut] = React.useState(false);
  const clearSurvey = () => {
    surveyStore.getState().clearSurvey();
  };
  useEffect(() => {
    if (progress === 6) {
      setTimeout(() => {
        setFadeOut(true);
      }, 1000);
    }
    if (progress === 0) {
      clearSurvey();
    }
  }, [progress]);

  const submitMemeberInfo = () => {
    const token = authStore.getState().accessToken;
    const { nickname, birthDate, gender } = surveyStore.getState();

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        nickname,
        birth_date: `${birthDate.slice(0, 4)}-${birthDate.slice(
          4,
          6,
        )}-${birthDate.slice(6, 8)}`,
        gender,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          nextProgress();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = async () => {
    const {
      surveyCocktails,
      occassionId,
      baseId,
      alcoholContent,
      sweetness,
      surveyIngredients,
    } = surveyStore.getState();
    try {
      const response = await submitSurvey({
        survey_cocktails: surveyCocktails,
        occasion_id: 4,
        base_id: 3,
        alcohol_content: alcoholContent,
        sweetness,
        survey_ingredients: surveyIngredients,
      });
      if (response.status === 200) {
        nextProgress();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="topWrapper">
        <h1>{getQuestion(progress)}</h1>
        <div className="progressBarWrapper">
          <div
            className={`progressBar ${fadeOut ? 'fadeOut' : ''}`}
            style={{ width: `${(progress * 100) / 6}%` }}
          />
        </div>
      </div>
      <div className="surveyWrapper">{children}</div>
      <div className="progressWrapper">
        {progress > 0 && (
          // temp
          // progress < 6 &&
          <button
            className="before"
            type="button"
            onClick={() => beforeProgress()}
          >
            이전
          </button>
        )}

        {progress < 6 && (
          <button className="next" type="button" onClick={() => nextProgress()}>
            다음
          </button>
        )}

        {progress === 6 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              console.log('hh');
              nextProgress();
              // submitMemeberInfo();
              submit();
              // submit API
            }}
          >
            제출
          </button>
        )}
        {progress === 7 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              submitSurvey();
            }}
          >
            홈으로
          </button>
        )}
      </div>
    </>
  );
}
