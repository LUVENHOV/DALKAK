'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import NavbarTopRank from './NavbarTopRank';
import { Logout } from '@/apis/Auth';
import logo from '@/public/assets/imgs/logo.png';
import authStore from '@/store/authStore';
import memberStore from '@/store/memberStore';

// import memberStore from '@/store/memberStore';

export default function Navbar() {
  const pathName = usePathname();
  // const tmp = memberStore((state) => state.actions.tmp);
  // eslint-disable-next-line no-unused-expressions
  const isLoggedIn = memberStore((state) => state.isLoggedIn);
  // const nickname = memberStore((state) => state.nickname);
  const clearAll = memberStore((state) => state.clearAll);
  const clearTokens = authStore((state) => state.clearTokens);
  // const accessToken = authStore((state) => state.accessToken);
  // const headerConfig = {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // };
  const LogoutFunction = async () => {
    try {
      const response = await Logout();
      if (response.status === 200) {
        clearAll();
        clearTokens();
        window.location.replace('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className={styles.pages}>
          <Link href="/cocktail">
            <div
              className={pathName?.startsWith('/cocktail') ? styles.active : ''}
            >
              칵테일 목록
            </div>
          </Link>

          <Link href="/storage">
            <div
              className={pathName?.startsWith('/storage') ? styles.active : ''}
            >
              냉장고
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.fix}>
          현재 가장 인기 있는 칵테일&nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
        <div>
          <NavbarTopRank />
        </div>
      </div>
      <div className={styles.right}>
        {isLoggedIn ? (
          <>
            <div className={styles.nickname}>
              {memberStore.getState().nickname} 님 반가워요!
            </div>
            <button
              className={styles.btn}
              type="button"
              onClick={() => LogoutFunction()}
            >
              로그아웃
            </button>
          </>
        ) : (
          <div className={styles.login}>로그인이 필요해요</div>
        )}
        <Link href="/member">
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
}
