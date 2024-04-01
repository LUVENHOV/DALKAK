'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import logo from '@/public/assets/imgs/logo.png';
// import memberStore from '@/store/memberStore';

export default function Navbar() {
  const pathName = usePathname();
  // const tmp = memberStore((state) => state.actions.tmp);
  // eslint-disable-next-line no-unused-expressions
  // const isLoggedIn = memberStore((state) => state.isLoggedIn);
  // const nickname = memberStore((state) => state.nickname);
  // const clearAll = memberStore((state) => state.actions.clearAll);
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
        현재 가장 인기 있는 칵테일&nbsp;&nbsp;&nbsp;|
        <span className={styles['top-cocktail']}>
          &nbsp;&nbsp;&nbsp;1 갓파더
        </span>
      </div>
      <div className={styles.right}>
        안녕하세요
        <span>&nbsp;&nbsp;</span>
        <span className={styles.nickname}>test</span>
        님!
        <Link href="/member">
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
}
