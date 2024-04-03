import React from 'react';
import CocktailItems from '../surveyComponents/CocktailItems';
import './CocktailSurvey.scss';

import img1409 from '@/public/assets/imgs/cocktail/1409.png';
import img1483 from '@/public/assets/imgs/cocktail/1483.png';
import img1556 from '@/public/assets/imgs/cocktail/1556.png';
import img2135 from '@/public/assets/imgs/cocktail/2135.png';
import img2506 from '@/public/assets/imgs/cocktail/2506.png';
import img2523 from '@/public/assets/imgs/cocktail/2523.png';
import img28 from '@/public/assets/imgs/cocktail/28.png';
import img2985 from '@/public/assets/imgs/cocktail/2985.png';
import img3109 from '@/public/assets/imgs/cocktail/3109.png';
import img3115 from '@/public/assets/imgs/cocktail/3115.png';
import img3116 from '@/public/assets/imgs/cocktail/3116.png';
import img3118 from '@/public/assets/imgs/cocktail/3118.png';
import img3121 from '@/public/assets/imgs/cocktail/3121.png';
import img3122 from '@/public/assets/imgs/cocktail/3122.png';
import img3123 from '@/public/assets/imgs/cocktail/3123.png';
import img3142 from '@/public/assets/imgs/cocktail/3142.png';
import img3163 from '@/public/assets/imgs/cocktail/3163.png';
import img3164 from '@/public/assets/imgs/cocktail/3164.png';
import img3165 from '@/public/assets/imgs/cocktail/3165.png';
import img56 from '@/public/assets/imgs/cocktail/56.png';

const CocktailSampleList = [
  { id: 28, name: 'Kamikaze', koreanName: '카미카제', image: img28 },
  { id: 56, name: 'Screwdriver', koreanName: '스크류드라이버', image: img56 },
  { id: 1409, name: 'Gin Tonic', koreanName: '진 토닉', image: img1409 },
  { id: 1483, name: 'Blue Hawaii', koreanName: '블루 하와이', image: img1483 },
  { id: 1556, name: 'Martini', koreanName: '마티니', image: img1556 },
  { id: 2135, name: 'Pina Colada', koreanName: '피나 콜라다', image: img2135 },
  { id: 2506, name: 'Rusty Nail', koreanName: '러스티 네일', image: img2506 },
  { id: 2523, name: 'Godfather', koreanName: '갓파더', image: img2523 },
  {
    id: 2985,
    name: 'Tequila Sunrise',
    koreanName: '테낄라 선라이즈',
    image: img2985,
  },
  {
    id: 3109,
    name: 'Cosmopolitan',
    koreanName: '코스모폴리탄',
    image: img3109,
  },
  {
    id: 3115,
    name: 'Black Russian',
    koreanName: '블랙 러시안',
    image: img3115,
  },
  { id: 3116, name: 'Bloody Mary', koreanName: '블러디 메리', image: img3116 },
  {
    id: 3118,
    name: 'Sex on the Beach',
    koreanName: '섹스 온 더 비치',
    image: img3118,
  },
  {
    id: 3121,
    name: 'Long Island Iced Tea',
    koreanName: '롱 아일랜드 아이스 티',
    image: img3121,
  },
  { id: 3122, name: 'Margarita', koreanName: '마가리타', image: img3122 },
  { id: 3123, name: 'Mai-Tai', koreanName: '마이타이', image: img3123 },
  { id: 3142, name: 'Manhattan', koreanName: '맨해튼', image: img3142 },
  { id: 3163, name: 'Orgasm', koreanName: '오르가즘', image: img3163 },
  { id: 3164, name: 'Kahlua Milk', koreanName: '깔루아 밀크', image: img3164 },
  {
    id: 3165,
    name: 'Kiss Of Fire',
    koreanName: '키스 오브 파이어',
    image: img3165,
  },
];

export default function CocktailSurvey() {
  return (
    <div className="wrapper">
      <div className="cocktail-grid">
        {CocktailSampleList.map((cocktail) => (
          <CocktailItems
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.koreanName}
            image={cocktail.image}
          />
        ))}
      </div>
    </div>
  );
}
