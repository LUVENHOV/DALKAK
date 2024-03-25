'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import logo from '@/public/assets/imgs/logo.png';
import authStore from '@/store/authStore';
import memberStore from '@/store/memberStore';

export default function Navbar() {
  const pathName = usePathname();
  // const tmp = memberStore((state) => state.actions.tmp);
  // eslint-disable-next-line no-unused-expressions
  const isLoggedIn = memberStore((state) => state.isLoggedIn);
  const nickname = memberStore((state) => state.nickname);
  const clearAll = memberStore((state) => state.clearAll);
  const clearTokens = authStore((state) => state.clearTokens);
  const accessToken = authStore((state) => state.accessToken);
  const headerConfig = {
    headers: {
      Authorization: accessToken,
    },
  };
  const Logout = async () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL as string}/oauth/logout`,
        headerConfig,
      )
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          clearAll();
          clearTokens();
        }
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <div className="dalkak">
          {/* <div>DAL</div>
          <div>KAK</div> */}
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <Link href="/cocktail">
        <div className={pathName?.startsWith('/cocktail') ? styles.active : ''}>
          칵테일 목록
        </div>
      </Link>

      <Link href="/storage">
        <div className={pathName === '/storage' ? styles.active : ''}>
          냉장고
        </div>
      </Link>

      <div />
      <div>
        현재 가장 인기 있는 칵테일&nbsp;&nbsp;&nbsp;|
        <span className={styles['top-cocktail']}>
          &nbsp;&nbsp;&nbsp;1 갓파더
        </span>
      </div>
      <div />
      {isLoggedIn ? (
        <>
          <button type="button" onClick={() => Logout()}>
            로그아웃
          </button>
          <Link href="/member">
            <HomeIcon />
          </Link>
        </>
      ) : (
        <div className={styles.login}>로그인이 필요해요</div>
      )}
    </div>
  );
}
