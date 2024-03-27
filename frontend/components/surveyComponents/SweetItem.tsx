import { useState, useEffect } from 'react';
import './SweetItem.scss';
import surveyStore from '@/store/surveyStore';

interface ItemProps {
  id: number;
  name: string;
  description: string;
  val: number;
}
export default function SweetItem({ id, name, val, description }: ItemProps) {
  const [selected, setSelected] = useState(
    surveyStore.getState().sweatness === id,
  );
  useEffect(() => {
    const deselect = surveyStore.subscribe(() => {
      const newSelected = surveyStore.getState().sweatness === val;
      setSelected(newSelected);
    });

    return () => deselect();
  }, [val]);
  const setSweetness = surveyStore((state) => state.setSweatness);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => setSweetness(val)}
      key={id}
      className={`sweet-item ${selected ? 'selected' : ''}`}
    >
      <div className="sample" />
      {/* <div className="cocktial-image-wrapper">
      <img src={cocktail.image} alt={cocktail.name} />
    </div> */}
      <div>{description}</div>
    </div>
  );
}
