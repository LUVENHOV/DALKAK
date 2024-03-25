import { useState } from 'react';
import './CocktailItems.scss';
import surveyStore from '@/store/surveyStore';

interface ItemProps {
  id: number;
  name: string;
  image: string;
}
export default function CocktailItems({ id, name, image }: ItemProps) {
  const [selected, setSelected] = useState(false);
  const addSurveyCocktails = surveyStore((state) => state.addSurveyCocktails);
  const deleteSurveyCocktails = surveyStore(
    (state) => state.deleteSurveyCocktails,
  );

  const ToggleSelected = () => {
    if (selected) {
      setSelected(false);
      deleteSurveyCocktails(id);
    } else {
      setSelected(true);
      addSurveyCocktails(id);
    }
    console.log(surveyStore.getState().surveyCocktails);
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => ToggleSelected()}
      key={id}
      className={`cocktail-item ${selected ? 'selected' : ''}`}
    >
      <div className="sample" />
      <div className="name">{name}</div>
      {/* <div className="cocktial-image-wrapper">
        <img src={cocktail.image} alt={cocktail.name} />
        </div> */}
    </div>
  );
}
