/* eslint-disable react/jsx-key */

'use client';

import React, { useEffect, useState } from 'react';
import { getProfile } from '@/apis/Member';
import CocktailCard from '@/components/cocktail-list/CocktailCard';
import CustomCocktailCard from '@/components/custom-cocktail/CustomCocktailCard';
import ProfileCard from '@/components/member/ProfileCard';

import './page.scss';

interface IData {
  id: number;
  nickname: string;
  birth_date: number[];
  gender: string;
  heart_cocktails: number[];
  custom_cocktails: number[];
}
interface ICustom {
  id: number;
  image: string;
  name: string;
  summary: string;
  user: {
    id: number;
    nickname: string;
  };
}
interface ICocktailType {
  id: number;
  name: string;
  koreanName: string;
  image: string;
  heartCount: number;
}
// const convertBirthdateToString = (birth: number[]) =>
//   `${birth[0]}${birth[1].toString().padStart(2, '0')}${birth[2].toString().padStart(2, '0')}`;
export default function Page() {
  const [profile, setProfile] = useState({} as IData);
  const [loading, setLoading] = useState(true);
  const [myCocktails, setMyCocktails] = useState([] as ICocktailType[]);
  const [customCocktails, setCustomCocktails] = useState([] as ICustom[]);
  const loadProfile = async () => {
    setLoading(true);
    try {
      const response = await getProfile();
      if (response.status === 200) {
        const responseData = await response.json();
        const { data } = responseData;
        console.log(data);
        setMyCocktails(data.heart_cocktails);
        setCustomCocktails(data.custom_cocktails);
        setProfile(data);
      } else if (response.status === 401) {
        window.location.replace('/');
      }
    } catch (e) {
      console.error(e);
      alert('프로필을 불러오는데 실패했습니다.');
    } finally {
      console.log('done');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="column-box">
      <div className="container with-profile">
        {profile && (
          <ProfileCard
            nickname={profile.nickname}
            // birth_date={profile.birth_date}
            birth_date="1999-01-01"
            gender={profile.gender}
          />
        )}
        <div className="container">
          <h3 className="title">최근 조회한 칵테일</h3>
          <div className="no-content-like">
            <h3>최근 조죄한 칵테일이 없습니다</h3>
          </div>
        </div>
      </div>
      <div className="mypage-cocktail">
        <hr />
        <div className="container">
          <h3>좋아요 누른 칵테일</h3>
          {myCocktails?.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              id={cocktail.id}
              name={cocktail.name}
              koreanName={cocktail.koreanName}
              image={cocktail.image}
              heartCount={cocktail.heartCount}
            />
          ))}
          {myCocktails.length === 0 && (
            <div className="no-content-like">
              <h3>좋아요 누른 칵테일이 없습니다.</h3>
            </div>
          )}
        </div>
      </div>
      <div className="mypage-cocktail">
        <hr />
        <div className="container">
          <h3>커스텀 칵테일</h3>
          <div className="list-wrapper">
            {customCocktails.map((cocktail) => (
              <CustomCocktailCard
                key={cocktail.id}
                custom={cocktail}
                type="big"
              />
            ))}
            {customCocktails.length === 0 && (
              <div className="no-content-like">
                <h3>내 커스텀 칵테일이 없습니다.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
