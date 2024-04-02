import React from 'react';
import OccasionItem from '../surveyComponents/OccasionItem';
import './OccationSurvey.scss';

import occafter from '@/public/assets/imgs/occafter.png';
import occbefore from '@/public/assets/imgs/occbefore.png';
import occdinner from '@/public/assets/imgs/occdinner.png';
import occlunch from '@/public/assets/imgs/occlunch.png';

const OccationSampleList = [
  {
    id: 1,
    name: 'lunch',
    description: '점심에 먹어요!',
    src: occlunch,
  },
  {
    id: 2,
    name: 'dinner',
    description: '저녁에 먹어요!',
    src: occdinner,
  },
  {
    id: 3,
    name: 'before',
    description: '식전에 먹어요!',
    src: occbefore,
  },
  {
    id: 4,
    name: 'after',
    description: '식후에 먹어요!',
    src: occafter,
  },
];
export default function OccationSurvey() {
  return (
    <div className="occation-wrapper">
      {/* <Image
        src="../../../assets/imgs/occ_after.png"
        width={1000}
        height={1000}
        alt="logo"
      /> */}
      {OccationSampleList.map((occation) => (
        <OccasionItem
          key={occation.id}
          id={occation.id}
          name={occation.name}
          description={occation.description}
          url={occation.src}
        />
      ))}
    </div>
  );
}
