"use client";

import React, { useEffect } from "react";

import surveyStore from "../../store/surveyStore";
import { submitSurvey } from "@/apis/Member";
import authStore from "@/store/authStore";

import "./page.scss";
import memberStore from "@/store/memberStore";
// import useSearchStore from '@/store/searchStore';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const progress = surveyStore((state) => state.progress);
  const getQuestion = surveyStore((state) => state.getQuestion);
  const nextProgress = surveyStore((state) => state.nextProgress);
  const beforeProgress = surveyStore((state) => state.beforeProgress);
  // const addSurveyIngredients = surveyStore(
  //   (state) => state.addSurveyIngredients,
  // );
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

    if (nickname === "" || birthDate === "" || gender === "") {
      alert("모든 항목을 입력해주세요");
    } else {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          nickname,
          birth_date: `${birthDate.slice(0, 4)}-${birthDate.slice(
            4,
            6
          )}-${birthDate.slice(6, 8)}`,
          gender,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            nextProgress();
            memberStore.getState().setNickname(nickname);
            memberStore.getState().setBirthDate(birthDate);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const submit = async () => {
    const { surveyCocktails, occassionId, baseId, alcoholContent, sweetness } =
      surveyStore.getState();
    try {
      const response = await submitSurvey({
        survey_cocktails: surveyCocktails,
        occasion_id: occassionId,
        base_id: baseId,
        alcohol_content: alcoholContent,
        sweetness,
        survey_ingredients: [1, 2, 3],
      });
      if (response.status === 201) {
        alert("제출 완료!");
        console.log("submit success");
        window.location.replace("/");
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
            className={`progressBar ${fadeOut ? "fadeOut" : ""}`}
            style={{ width: `${(progress * 100) / 5}%` }}
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

        {progress < 5 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              switch (progress) {
                case 0:
                  submitMemeberInfo();
                  break;
                case 1:
                  if (surveyStore.getState().surveyCocktails.length !== 0) {
                    nextProgress();
                  } else {
                    alert("최소 1개의 칵테일을 선택해주세요!");
                  }
                  break;
                case 2:
                  if (surveyStore.getState().occassionId !== 0) {
                    nextProgress();
                  } else {
                    alert("언제 마시나요!");
                  }
                  break;
                case 3:
                  if (surveyStore.getState().baseId !== 0) {
                    nextProgress();
                  } else {
                    alert("베이스를 선택해주세요!");
                  }
                  break;
                case 4:
                  if (surveyStore.getState().alcoholContent !== 0) {
                    nextProgress();
                  } else {
                    alert("도수를 선택해주세요!");
                  }
                  break;
                default:
                  break;
              }
            }}
          >
            다음
          </button>
        )}

        {progress === 5 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              submit();
            }}
          >
            제출
          </button>
        )}
        {/* {progress === 7 && (
          <button
            className="next"
            type="button"
            onClick={() => {
              submitSurvey();
            }}
          >
            홈으로
          </button>
        )} */}
      </div>
    </>
  );
}
