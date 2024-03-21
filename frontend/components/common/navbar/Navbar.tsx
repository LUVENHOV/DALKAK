'use client';

import Link from 'next/link';
import React from 'react';
import './Navbar.scss';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import memberStore from '@/store/memberStore';

export default function Navbar() {
  const pathName = usePathname();
  const tmp = memberStore((state) => state.actions.tmp);
  // eslint-disable-next-line no-unused-expressions
  const isLoggedIn = memberStore((state) => state.isLoggedIn);
  const nickname = memberStore((state) => state.nickname);
  const clearAll = memberStore((state) => state.actions.clearAll);

  //temp
  return (
    <div className="navbar">
      <Link href="/">
        <div className="dalkak">
          <div>DAL</div>
          <div>KAK</div>
        </div>
      </Link>
      <Link href="/cocktail">
        <div className={pathName.startsWith('/cocktail') ? 'active' : ''}>
          칵테일 목록
        </div>
      </Link>

      <Link href="/storage">
        <div className={pathName === '/storage' ? 'active' : ''}>냉장고</div>
      </Link>

      <div />
      <div>
        현재 가장 인기 있는 칵테일&nbsp;&nbsp;&nbsp;|
        <span className="top-cocktail">1 갓파더</span>
      </div>
      <div />
      {isLoggedIn ? (
        <div className="hi">
          안녕하세요
          <span>&nbsp;&nbsp;</span>
          <span
            className="nickname" 
            onClick={clearAll}>{nickname}</span>
          님!
        </div>
      ) : (<div className="hi"
            onClick={tmp}>로그인 해주세요!</div>)}

      <Link href="/member">
        <HomeIcon />
      </Link>
    </div>
  );
}
