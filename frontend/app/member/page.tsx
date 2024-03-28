'use client';

import React from 'react';
import { getProfile } from '@/apis/Member';
import Navbar from '@/components/common/Navbar';
import $Fetch from '@/apis/common';
import authStore from '@/store/authStore';

const getAccessToken = () => authStore.getState().accessToken;
const URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default async function Page() {
  $Fetch('GET', `${URL}/users/profile`, getAccessToken()).then((res) => {
    console.log(res);
  });
  return <div />;
}
