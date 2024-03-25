import { useState, useEffect } from 'react';
import './OccationItems.scss';
import surveyStore from '@/store/surveyStore';

interface ItemProps {
  id: number;
  name: string;
  description: string;
}
export default function OccationItems({ id, name, description }: ItemProps) {
  const [selected, setSelected] = useState(
    surveyStore.getState().occationId === id,
  );
  useEffect(() => {
    const deselect = surveyStore.subscribe(() => {
      const newSelected = surveyStore.getState().occationId === id;
      setSelected(newSelected);
    });

    return () => deselect();
  }, [id]);
  const setOccationId = surveyStore((state) => state.setOccationId);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => setOccationId(id)}
      key={id}
      className={`occation-item ${selected ? 'selected' : ''}`}
    >
      {' '}
      <div className="sample" />
      {/* <div className="cocktial-image-wrapper">
      <img src={cocktail.image} alt={cocktail.name} />
    </div> */}
      <div>{description}</div>
    </div>
  );
}
