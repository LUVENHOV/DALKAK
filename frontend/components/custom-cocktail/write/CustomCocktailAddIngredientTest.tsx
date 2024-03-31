'use client';

import { ChangeEvent, useState, useEffect } from 'react';

import styles from './CustomCocktailAddIngredient.module.scss';

interface Unit {
  id: number;
  name: string;
}

// interface CustomIngredientList {
//   id: number;
//   amount: number;
//   unit_id: number;
// }

interface CustomIngredientList {
  id: number;
  name: string;
  image: string;
  category_id: number;
  amount: number;
  unit: Unit;
}

// interface Origin {
//   id: number;
//   name: string;
//   image: string;
//   category_id: number;
//   amount: number;
//   unit: Unit;
// }

interface Props {
  // origin: CustomIngredientList[];
  removeItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleInputChangeTest: (value: number, index: number[]) => void;
  handleUnitInputChange: (
    event: ChangeEvent<HTMLSelectElement>,
    id: number,
    index: number[],
  ) => void;
  tempList: CustomIngredientList[];
  inputValues: number[];
  inputUnitValues: string[];
  inputUnitValuesId: number[];
}

export default function CustomCocktailAddIngredientTest({
  removeItem,
  handleInputChangeTest,
  handleUnitInputChange,
  tempList,
  inputValues,
  inputUnitValues,
  inputUnitValuesId,
}: Props) {
  // console.log(inputValues);
  // console.log('>>>>', inputUnitValuesId);
  // console.log(tempList);
  return (
    <div>
      <div className={styles.title}>재료</div>

      <div className={styles.scrollable}>
        <div className={styles.add}>
          {tempList.map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <div className={styles['grid-container']}>
                <div>{data.name}</div>
                <div />
                <div>
                  <input
                    type="number"
                    pattern="[0-9]+"
                    className={styles['amount-input']}
                    defaultValue={inputValues[index]}
                    // value={tempValues[index]}
                    // onChange={(e) => handleInputChange(e, data.id)}
                    maxLength={4}
                    onChange={(e) =>
                      handleInputChangeTest(parseInt(e.target.value, 10), [
                        index,
                      ])
                    }
                  />
                </div>
                <div>
                  <select
                    className={styles['unit-input']}
                    defaultValue={inputUnitValuesId[index]}
                    onChange={
                      (e) =>
                        handleUnitInputChange(e, parseInt(e.target.value, 10), [
                          index,
                        ])
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  >
                    <option value="1">개</option>
                    <option value="2">웨지</option>
                    <option value="3">슬라이스</option>
                    <option value="4">꼬집</option>
                    <option value="5">조각</option>
                    <option value="6">ml</option>
                    <option value="7">스쿱</option>
                    <option value="8">방울</option>
                    <option value="9">그램</option>
                    <option value="10">잎</option>
                    <option value="11">none</option>
                  </select>
                </div>
                <div />
                <div>
                  <button
                    type="button"
                    className={styles['delete-button']}
                    onClick={() => removeItem(data.id)}
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
