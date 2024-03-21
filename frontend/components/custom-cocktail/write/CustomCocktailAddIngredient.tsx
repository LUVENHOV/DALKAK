'use client';

import { ChangeEvent, useState, useEffect } from 'react';

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
  // const [amount, setAmount] = useState(origin.ingredient_amount)
  const [inputValues, setInputValues] = useState<string[]>(
    origin.map((item) => String(item.ingredient_amount)),
  );

  const [inputUnitValues, setInputUnitValues] = useState<string[]>(
    origin.map((item) => String(item.unit.name)),
  );

  useEffect(() => {
    console.log(tempList);
  }, [tempList]);

  const removeItem = (id: number) => {
    setTempList((prevList) => {
      const updatedList = prevList.filter((data) => data.ingredient.id !== id);
      return updatedList;
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[id - 1] = value;
      return updatedValues;
    });

    console.log(inputValues);
  };

  const handleUnitInputChange = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number,
  ) => {
    const { value } = e.target;
    setInputUnitValues((prevUnitValues) => {
      const updatedUnitValues = [...prevUnitValues];
      updatedUnitValues[id - 1] = value;
      return updatedUnitValues;
    });

    console.log(inputUnitValues);
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
                <div />
                <div>
                  <input
                    type="text"
                    pattern="[0-9]+"
                    className={styles['amount-input']}
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(e, data.ingredient.id)}
                    maxLength={4}
                  />
                </div>
                <div>
                  <select
                    className={styles['unit-input']}
                    value={inputUnitValues[index]}
                    onChange={(e) => handleUnitInputChange(e, data.ingredient.id)}
                  >
                    <option>개</option>
                    <option>웨지</option>
                    <option>슬라이스</option>
                    <option>꼬집</option>
                    <option>조각</option>
                    <option>ml</option>
                    <option>스쿱</option>
                    <option>방울</option>
                    <option>그램</option>
                    <option>잎</option>
                    <option>none</option>
                  </select>
                </div>
                <div />
                <div>
                  <button
                    className={styles['delete-button']}
                    onClick={() => removeItem(data.ingredient.id)}
                  >
                    ✕
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
