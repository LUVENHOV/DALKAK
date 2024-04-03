import { useState } from 'react';
import './CocktailItems.scss';
import Image, { StaticImageData } from 'next/image';
import surveyStore from '@/store/surveyStore';

interface ItemProps {
  id: number;
  name: string;
  image: StaticImageData;
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
  };
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => ToggleSelected()}
      key={id}
      className={`cocktail-item ${selected ? 'selected' : ''}`}
    >
      <Image src={image} width={100} alt="nococktail" />
      <div className="name">{name}</div>
      {/* <div className="cocktial-image-wrapper">
        <img src={cocktail.image} alt={cocktail.name} />
        </div> */}
    </div>
  );
}
