'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import logo from '@/public/assets/imgs/logo.png';
import NavbarTopRank from './NavbarTopRank';
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
      <Link href="/">
        <div className="dalkak">
          {/* <div>DAL</div>
          <div>KAK</div> */}
          <Image src={logo} width={1000} height={1000} alt="logo" />
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
      <div>현재 가장 인기 있는 칵테일&nbsp;&nbsp;&nbsp;|</div>
      <div className={styles.top}>
        <NavbarTopRank />
      </div>
      <div />
      <div className={styles.hi}>
        안녕하세요
        <span>&nbsp;&nbsp;</span>
        <span className={styles.nickname}>test</span>
        님!
      </div>

      <Link href="/member">
        <HomeIcon />
      </Link>
    </div>
  );
}
