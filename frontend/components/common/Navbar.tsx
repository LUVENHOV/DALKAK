'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import memberStore from '@/store/memberStore';
import logo from '@/public/assets/imgs/logo.png';

export default function Navbar() {
  const pathName = usePathname();
  // const tmp = memberStore((state) => state.actions.tmp);
  // eslint-disable-next-line no-unused-expressions
  const isLoggedIn = memberStore((state) => state.isLoggedIn);
  const nickname = memberStore((state) => state.nickname);
  const clearAll = memberStore((state) => state.clearAll);
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
          <div
            className={styles.logout}
            onClick={() => {
              clearAll();
            }}
          >
            로그아웃
          </div>
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
