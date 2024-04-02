import React from 'react';
import SweetItem from '../surveyComponents/SweetItem';
import './SweetnessSurvey.scss';
import sweet1 from '@/public/assets/imgs/sweet/sweet1.png';
import sweet2 from '@/public/assets/imgs/sweet/sweet2.png';
import sweet3 from '@/public/assets/imgs/sweet/sweet3.png';
import sweet4 from '@/public/assets/imgs/sweet/sweet4.png';
import sweet5 from '@/public/assets/imgs/sweet/sweet5.png';

const SampleList = [
  { id: 1, description: '안 달달', name: '매우낮음', imgSrc: sweet1, val: 1 },
  { id: 2, description: '덜 달달', name: '낮음', imgSrc: sweet2, val: 2 },
  { id: 3, description: '보통', name: '중간', imgSrc: sweet3, val: 3 },
  { id: 4, description: '달달', name: '높음', imgSrc: sweet4, val: 4 },
  {
    id: 5,
    description: '매우 달달',
    name: '매우 높음',
    imgSrc: sweet5,
    val: 5,
  },
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
          imgSrc={sweetness.imgSrc}
        />
      ))}
    </div>
  );
}
