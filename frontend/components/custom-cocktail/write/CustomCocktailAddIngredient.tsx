'use client';

import { useState } from 'react';
import { useEffect } from 'react';

import styles from './CustomCocktailAddIngredient.module.scss';

interface Origin {
  ingredient: {
    id: number;
    name: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface Props {
  origin: Origin[];
}

const unitList = ['조각', '슬라이스', '그램', 'ml', '개'];

export default function CustomCocktailAddIngredient({ origin }: Props) {
  const [tempList, setTempList] = useState(origin);

  useEffect(() => {
    console.log(tempList);
  }, [tempList]);

  const removeItem = (id: number) => {
    setTempList((prevList) => {
      const updatedList = prevList.filter((data) => data.ingredient.id !== id);
      return updatedList;
    });
  };

  return (
    <div>
      <div className={styles.title}>재료</div>

      <div className={styles.scrollable}>
        <div className={styles.add}>
          {tempList.map((data, index) => (
            <div key={index}>
              <div className={styles['grid-container']}>
                <div>{data.ingredient.name}</div>
                <div></div>
                <div>{data.ingredient_amount}</div>
                <div>
                  <select value={data.unit.name}>
                    <option>조각</option>
                    <option>슬라이스</option>
                    <option>ml</option>
                  </select>
                </div>
                <div></div>
                <div>
                  <button onClick={() => removeItem(data.ingredient.id)}>
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <input
        className={styles['ingredient-input-style']}
        placeholder="추가할 재료를 검색해보세요!"
      />
    </div>
  );
}
