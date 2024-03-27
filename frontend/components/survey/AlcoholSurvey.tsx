'use client';

import React from 'react';
import './AlcoholSurvey.scss';
import DegreeItem from '../surveyComponents/DegreeItem';

const sampleDegree = [
  {
    val: 1,
    title: '가볍게',
    description: '맥주 도수 정도로 가볍게 즐기고 싶어요',
    image: '',
  },
  { val: 2, title: '보통', description: '적당히 즐기고 싶어요', image: '' },
  {
    val: 3,
    title: '적당히 세게',
    description: '도수가 좀 있었으면 해요',
    image: '',
  },
  {
    val: 4,
    title: '세게',
    description: '칵테일을 즐기고 싶어요',
    image: '',
  },
  {
    val: 5,
    title: '매우 세게',
    description: '엄청 센 칵테일을 즐기고 싶어요',
    image: '',
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
