/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line camelcase, camelcase
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './ProfileCard.scss';
import Image from 'next/image';
// eslint-disable-next-line import/order
import { useState, useEffect } from 'react';

interface ICard {
  nickname: string;
  birth_date: string;
  gender: string;
}

export default function ProfileCard({ nickname, birth_date, gender }: ICard) {
  const [info, setinfo] = useState({
    nickname: '',
    birth_date: '',
    gender: '',
  });

  useEffect(() => {
    setinfo({
      nickname,
      birth_date,
      gender,
    });
  }, []);

  const [nicknameChange, setNicknameChange] = useState(false);
  const [birthDateChange, setBirthDateChange] = useState(false);
  const [genderChange, setGenderChange] = useState(false);

  const handleNicknameChange = () => {
    setNicknameChange(!nicknameChange);
  };
  const handleBirthDateChange = () => {
    setBirthDateChange(!birthDateChange);
  };
  const handleGenderChange = () => {
    setGenderChange(!genderChange);
  };
  return (
    <div className="card">
      <div className="info">
        <div className="wrapper" onChange={() => handleNicknameChange()}>
          <div className="label">별명</div>
          {nicknameChange ? (
            <input className="nickname " value={info.nickname} />
          ) : (
            <div className="nickname">{info.nickname}</div>
          )}
        </div>
        <div className="wrapper" onChange={() => handleBirthDateChange()}>
          <div className="label">생일</div>
          {birthDateChange ? (
            <input className="birth_date" value={info.birth_date} />
          ) : (
            <div className="birth_date">{info.birth_date}</div>
          )}
        </div>
        <div className="wrapper" onChange={() => handleGenderChange()}>
          <div className="label">성별</div>
          {genderChange ? (
            <input className="gender" value={info.gender} />
          ) : (
            <div className="gender">{info.gender}</div>
          )}
        </div>
      </div>
      <div className="below">
        <button type="submit">
          <CheckIcon fontSize="small" />
          저장
        </button>
        <Image
          className="cocktail"
          src="../../../assets/imgs/cocktails.png"
          width={120}
          height={120}
          alt="noImage"
        />
      </div>
    </div>
  );
}
