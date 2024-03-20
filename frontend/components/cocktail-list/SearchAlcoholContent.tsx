'use client';

import styles from './SearchAlcoholContent.module.scss';
import { useRef, useState } from 'react';
import { useRanger, Ranger } from '@tanstack/react-ranger';

interface propsType {
  alcoholContent: readonly number[];
  handleAlcoholContent: (arr: readonly number[]) => void;
}

export default function SearchAlcoholContent(props: propsType) {
  const { alcoholContent: values, handleAlcoholContent } = props;

  const rangerRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 1,
    max: 50,
    stepSize: 1,
    onDrag: (instance: Ranger<HTMLDivElement>) => {
      handleAlcoholContent(instance.sortedValues);
      if (midRef.current) {
        const width = instance.getPercentageForValue(values[1] - values[0]) + 2;
        midRef.current.style.width = `${width}%`;
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.barArea}>
        <div ref={rangerRef} className={styles.bar}>
          {rangerInstance
            .handles()
            .map(
              (
                {
                  value,
                  onKeyDownHandler,
                  onMouseDownHandler,
                  onTouchStart,
                  isActive,
                },
                i,
              ) => (
                <>
                  <button
                    key={i}
                    onKeyDown={onKeyDownHandler}
                    onMouseDown={onMouseDownHandler}
                    onTouchStart={onTouchStart}
                    role="slider"
                    aria-valuemin={rangerInstance.options.min}
                    aria-valuemax={rangerInstance.options.max}
                    aria-valuenow={value}
                    className={styles.btn}
                    style={{
                      left: `${rangerInstance.getPercentageForValue(value)}%`,
                      zIndex: isActive ? '1' : '0',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className={styles.btnCircle}></div>
                    <div className={styles.btnNum}>{value}</div>
                  </button>
                  {i === 0 ? (
                    <div
                      key={i + 1}
                      className={styles.mid}
                      ref={midRef}
                      style={{
                        left: `${rangerInstance.getPercentageForValue(values[0])}%`,
                        width: `${rangerInstance.getPercentageForValue(values[1] - values[0]) + 2}%`,
                      }}
                    ></div>
                  ) : null}
                </>
              ),
            )}
        </div>
      </div>
    </div>
  );
}
