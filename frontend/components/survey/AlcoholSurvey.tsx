'use client';

import React from 'react';
import './AlcoholSurvey.scss';
import DegreeItem from '../surveyComponents/DegreeItem';

const sampleDegree = [
  {
    val: 1,
    title: '가볍게',
    description: '맥주 좋아요',
    image: '',
  },
  { val: 2, title: '약간 가볍게', description: '소주 좋아요!', image: '' },
  {
    val: 3,
    title: '적당히 세게',
    description: '보통?',
    image: '',
  },
  {
    val: 4,
    title: '세게',
    description: '술이 좋아요!',
    image: '',
  },
  {
    val: 5,
    title: '매우 세게',
    description: '알코올 좋아요!',
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
