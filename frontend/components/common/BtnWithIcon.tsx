'use client';

import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import styles from './BtnWithIcon.module.scss';

interface btnProps {
  // eslint-disable-next-line react/require-default-props
  icon?: SvgIconComponent;
  text: string;
  btnStyle: string;
  handleOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BtnWithIcon(props: btnProps) {
  const {
    icon: Icon, text, btnStyle, handleOnClick,
  } = props;

  return (
    <button
      type="button"
      onClick={handleOnClick ? (e) => handleOnClick(e) : () => {}}
      className={`${styles.btn} ${styles[btnStyle]}`}
    >
      {Icon ? <Icon /> : null}
      {text}
    </button>
  );
}

BtnWithIcon.defaultProps = {
  icon: null,
  handleOnClick: () => {},
};
