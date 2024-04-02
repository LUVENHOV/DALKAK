'use client';

import React from 'react';
import './AlcoholSurvey.scss';
import DegreeItem from '../surveyComponents/DegreeItem';

import a1 from '@/public/assets/imgs/degree/a1.png';
import a2 from '@/public/assets/imgs/degree/a2.png';
import a3 from '@/public/assets/imgs/degree/a3.png';
import a4 from '@/public/assets/imgs/degree/a4.png';
import a5 from '@/public/assets/imgs/degree/a5.png';

const sampleDegree = [
  {
    val: 1,
    title: '가볍게',
    description: '매우 가벼움',
    image: a1,
  },
  { val: 2, title: '약간 가볍게', description: '가벼운 도수', image: a2 },
  {
    val: 3,
    title: '적당히 세게',
    description: '보통?',
    image: a3,
  },
  {
    val: 4,
    title: '세게',
    description: '높은 도수!',
    image: a4,
  },
  {
    val: 5,
    title: '매우 세게',
    description: '아주 높은 도수!',
    image: a5,
  },
];
export default function AlcoholSurvey() {
  return (
    <div className="degree-wrapper">
      {sampleDegree.map((degree) => (
        <DegreeItem
          key={degree.val}
          val={degree.val}
          title={degree.title}
          description={degree.description}
          image={degree.image}
        />
      ))}
    </div>
  );
}
