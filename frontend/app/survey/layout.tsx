'use client';

import React, { useEffect } from 'react';
import surveyStore from '../../store/surveyStore';
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

        {progress == 6 && (
          <button className="next" type="button" onClick={() => {}}>
            제출
          </button>
        )}
      </div>
    </>
  );
}
