import React from 'react';
import './OauthButton.scss';

interface OauthButtonProps {
  bgcolor: string;
  icon: string;
  text: string;
  onClick: () => void;
}
export default function OauthButton({
  bgcolor,
  icon,
  text,
  onClick,
}: OauthButtonProps) {
  return (
    <button
      className={`button-oauth ${bgcolor}`}
      type="button"
      onClick={() => onClick()}
    >
      <img src={icon} alt="not found" />
      <div className="text-field-btn">{text}</div>
    </button>
  );
}
