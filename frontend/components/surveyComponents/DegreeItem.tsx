import { useState, useEffect } from 'react';
import './DegreeItem.scss';
import surveyStore from '@/store/surveyStore';

interface ItemProps {
  val: number;
  title: string;
  description: string;
  image: string;
}
export default function DegreeItem({
  val,
  title,
  image,
  description,
}: ItemProps) {
  const [selected, setSelected] = useState(
    surveyStore.getState().alcoholContent === val,
  );
  useEffect(() => {
    const deselect = surveyStore.subscribe(() => {
      const newSelected = surveyStore.getState().alcoholContent === val;
      setSelected(newSelected);
    });

    return () => deselect();
  }, [val]);
  const setAlcoholContent = surveyStore((state) => state.setAlcoholContent);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => setAlcoholContent(val)}
      key={val}
      className={`occation-item ${selected ? 'selected' : ''}`}
    >
      {image}
      {title}
      <div className="sample" />
      {/* <div className="cocktial-image-wrapper">
      <img src={cocktail.image} alt={cocktail.name} />
    </div> */}
      <div>{description}</div>
    </div>
  );
}
