'use client';

import React from 'react';
// eslint-disable-next-line import/extensions, import/no-unresolved
import surveyStore from '../../store/surveyStore';
// eslint-disable-next-line import/extensions, import/no-unresolved
import AlcoholSurvey from '@/components/survey/AlcoholSurvey.tsx';
import BaseSurvey from '@/components/survey/BaseSurvey';
import CocktailSurvey from '@/components/survey/CocktailSurvey';
import CompleteSurvey from '@/components/survey/CompleteSurvey';
import IngredientSurvey from '@/components/survey/IngredientSurvey';
import OccationSurvey from '@/components/survey/OccationSurvey';
import SweetnessSurvey from '@/components/survey/SweetnessSurvey';

export default function Survey() {
  const progress = surveyStore((state) => state.progress);
  switch (progress) {
    case 0:
      return CocktailSurvey();
    case 1:
      return OccationSurvey();
    case 2:
      return BaseSurvey();
    case 3:
      return AlcoholSurvey();
    case 4:
      return SweetnessSurvey();
    case 5:
      return IngredientSurvey();
    case 6:
      return CompleteSurvey();
    default:
      return <h1>{progress}</h1>;
  }
}
