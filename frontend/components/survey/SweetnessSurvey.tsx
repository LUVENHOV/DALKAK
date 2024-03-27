import React from 'react';
import SweetItem from '../surveyComponents/SweetItem';
import './SweetnessSurvey.scss';

const SampleList = [
  { id: 1, description: '안 달달', name: '매우낮음', val: 0 },
  { id: 2, description: '덜 달달', name: '낮음', val: 1 },
  { id: 3, description: '보통', name: '중간', val: 2 },
  { id: 4, description: '달달', name: '높음', val: 3 },
  { id: 5, description: '매우 달달', name: '매우 높음', val: 4 },
];
export default function OccationSurvey() {
  return (
    <div className="sweetness-wrapper">
      {SampleList.map((sweetness) => (
        <SweetItem
          key={sweetness.id}
          id={sweetness.id}
          name={sweetness.name}
          description={sweetness.description}
          val={sweetness.val}
        />
      ))}
    </div>
  );
}
