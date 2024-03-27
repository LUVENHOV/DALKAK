'use client';

import React, { useEffect } from 'react';

import surveyStore from '../../store/surveyStore';
import authStore from '@/store/authStore';

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
  useEffect(() => {
    if (progress === 6) {
      setTimeout(() => {
        setFadeOut(true);
      }, 1000);
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

  const submitSurvey = () => {
    const token = authStore.getState().accessToken;
    const {
      surveyCocktails,
      occationId,
      baseId,
      alcoholContent,
      sweatness,
      surveyIngredients,
    } = surveyStore.getState();

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/survey`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        survey_cocktails: surveyCocktails,
        occation_id: occationId,
        base_id: baseId,
        alcohol_content: alcoholContent,
        sweatness,
        survey_ingredients: surveyIngredients,
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
              submitSurvey();
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
