import React, { useState } from 'react';
import axios from 'axios';
import './InfoSurvey.scss';
import authStore from '@/store/authStore';
import surveyStore from '@/store/surveyStore';

interface IMemberInfo {
  nickname: string;
  birth: string;
  gender: string;
}

export default function InfoSurvey() {
  const accessToken = authStore((state) => state.accessToken);
  const setNickname = surveyStore((state) => state.setNickname);
  const setbirthDate = surveyStore((state) => state.setBirthDate);
  const setGender = surveyStore((state) => state.setGender);

  const headerConfig = {
    headers: {
      Authorization: accessToken,
    },
  };
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  console.log(isNicknameChecked);
  const [memberInfo, setMemberInfo] = useState<IMemberInfo>({
    nickname: '',
    birth: '',
    gender: '',
  });

  const setMemberInfoHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const { value } = e.target;
    switch (type) {
      case 'nickname':
        setMemberInfo({ ...memberInfo, nickname: value });
        setNickname(value);
        break;
      case 'birth':
        setMemberInfo({ ...memberInfo, birth: value });
        setbirthDate(value);
        break;
      case 'gender':
        setMemberInfo({ ...memberInfo, gender: value });
        setGender(value);
        break;
      default:
        break;
    }
  };

  const checkNickname = async () => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/profile/dupcheck`,
        {
          nickname: surveyStore.getState().nickname,
        },
        headerConfig,
      )
      .then((res) => {
        if (res.status === 200) {
          setIsNicknameChecked(true);
          alert('hi');
        } else if (res.status === 409) {
          alert('중복된 닉네임입니다.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      <div className="input">
        <div className="nickname input-wrapper">
          <input
            placeholder="닉네임"
            onChange={(e) => {
              setMemberInfoHandler(e, 'nickname');
            }}
          />
          <button
            type="button"
            onClick={() => {
              checkNickname();
            }}
          >
            중복확인
          </button>
        </div>
        <hr />
        <div className="birth input-wrapper">
          <input
            placeholder="생일(YYYYMMDD)"
            onChange={(e) => {
              setMemberInfoHandler(e, 'birth');
            }}
          />
        </div>
        <hr />
        <div className="gender input-wrapper">
          <div>성별</div>
          <div className="genderSelect">
            <div>남</div>
            <div>여</div>
          </div>
          {/* <input
            placeholder="성별"
            onChange={(e) => {
              setMemberInfoHandler(e, 'gender');
            }}
          /> */}
        </div>
        <hr />
      </div>
    </div>
  );
}
