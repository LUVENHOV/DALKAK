import React from 'react';
import BaseItem from '../surveyComponents/BaseItem';
import './BaseSurvey.scss';
import bitters from '@/public/assets/imgs/base/bitters.png';
import brandy from '@/public/assets/imgs/base/brandy.png';
import champagne from '@/public/assets/imgs/base/champagne.png';
import gin from '@/public/assets/imgs/base/gin.png';
import liquor from '@/public/assets/imgs/base/liquor.png';
import rum from '@/public/assets/imgs/base/rum.png';
import tequila from '@/public/assets/imgs/base/tequila.png';
import vodka from '@/public/assets/imgs/base/vodka.png';
import whiskey from '@/public/assets/imgs/base/whiskey.png';
import wine from '@/public/assets/imgs/base/wine.png';

const baseList = [
  {
    id: 1,
    name: '샴페인',
    src: champagne,
  },
  { id: 2, name: '럼', src: rum },
  { id: 3, name: '위스키', src: whiskey },
  { id: 4, name: '보드카', src: vodka },
  { id: 5, name: '진', src: gin },
  { id: 6, name: '테킬라', src: tequila },
  { id: 7, name: '브랜디', src: brandy },
  { id: 8, name: '리큐어', src: liquor },
  { id: 9, name: '와인', src: wine },
  { id: 10, name: ' 비터스', src: bitters },
];
export default function BaseSurvey() {
  return (
    <div className="wrapper">
      <div className="cocktail-grid">
        {baseList.map((base) => (
          <BaseItem
            key={base.id}
            id={base.id}
            name={base.name}
            imgsrc={base.src}
          />
        ))}
      </div>
    </div>
  );
}
