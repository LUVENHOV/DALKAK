'use client';

import React from 'react';
import styles from './BtnWithIcon.module.scss';
import { SvgIconComponent } from '@mui/icons-material';

interface btnProps {
  icon?: SvgIconComponent;
  text: string;
  btnStyle: string;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function (props: btnProps) {
  const { icon: Icon, text, btnStyle, handleOnClick } = props;

  return (
    <button
      type="button"
      onClick={(e) => handleOnClick(e)}
      className={`${styles.btn} ${styles[btnStyle]}`}
    >
      {Icon ? <Icon /> : null}
      {text}
    </button>
  );
}
