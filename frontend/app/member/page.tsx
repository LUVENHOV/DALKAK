'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { getProfile } from '@/apis/Member';
import ProfileCard from '@/components/member/ProfileCard';

interface IData {
  id: number;
  nickname: string;
  birth_date: number[];
  gender: string;
  heart_cocktails: number[];
  custom_cocktails: number[];
}

const convertBirthdateToString = (birth: number[]) =>
  `${birth[0]}${birth[1].toString().padStart(2, '0')}${birth[2].toString().padStart(2, '0')}`;
export default function Page() {
  const [profile, setProfile] = useState({} as IData);
  const [loading, setLoading] = useState(true);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const response = await getProfile();
      if (response.status === 200) {
        const responseData = await response.json();
        const { data } = responseData;
        setProfile(data);
      }
    } catch (error) {
      console.error('프로필을 불러오는 데 실패했습니다.', error);
    } finally {
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
    <div>
      {profile ? (
        <ProfileCard
          nickname={profile.nickname}
          birth_date={convertBirthdateToString(profile.birth_date)}
          gender={profile.gender}
        />
      ) : (
        <div>프로필 정보가 없습니다.</div>
      )}
    </div>
  );
}
