'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const useOauth = async (redirectUri: string) => {
  const [data, setData] = useState();
  const code = useSearchParams()?.get('code');
  try {
    const res = await fetch(`${redirectUri}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authorization_code: code,
        provider: 'GOOGLE',
        code: '',
      }),
    });
    console.log(res);
  } catch (error) {
    // console.error('Error:', error);
  }
  return data;
};

export default useOauth;
