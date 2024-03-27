import React from 'react';
import OccationItems from '../surveyComponents/DegreeItem';
import './OccationSurvey.scss';

const OccationSampleList = [
  { id: 1, name: 'lunch', description: '점심에 먹어요!' },
  { id: 2, name: 'dinner', description: '저녁에 먹어요!' },
  { id: 3, name: 'before', description: '식전에 먹어요!' },
  { id: 4, name: 'after', description: '식후에 먹어요!' },
];
export default function OccationSurvey() {
  return (
    <div className="occation-wrapper">
      {OccationSampleList.map((occation) => (
        <OccationItems
          key={occation.id}
          id={occation.id}
          name={occation.name}
          description={occation.description}
        />
      ))}
    </div>
  );
}
