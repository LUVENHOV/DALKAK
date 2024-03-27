import React from 'react';
import CocktailItems from '../surveyComponents/CocktailItems';
import './BaseSurvey.scss';

const baseList = [
  {
    id: 1,
    name: '샴페인',
    image: '',
  },
  { id: 2, name: '럼', image: '' },
  { id: 3, name: '위스키', image: '' },
  { id: 4, name: '보드카', image: '' },
  { id: 5, name: '진', image: '' },
  { id: 6, name: '테킬라', image: '' },
  { id: 7, name: '브랜디', image: '' },
  { id: 8, name: '리큐어', image: '' },
  { id: 9, name: '와인', image: '' },
  { id: 10, name: ' 비터스', image: '' },
];
export default function BaseSurvey() {
  return (
    <div className="wrapper">
      <div className="cocktail-grid">
        {baseList.map((base) => (
          <CocktailItems
            key={base.id}
            id={base.id}
            name={base.name}
            image={base.image}
          />
        ))}
        {/* {CocktailSampleList?.map(cocktail)=>(
          <div key={cocktail.id} className="cocktail-item">
            <img src=cocktail.image} alt={cocktail.name} />
            <div>{CocktailSampleList.</div>
            </div>
        )} */}
      </div>
    </div>
  );
}
