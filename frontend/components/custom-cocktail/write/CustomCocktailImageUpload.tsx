'use client';

import { useState, useRef } from 'react';

import styles from './CustomCocktailImageUpload.module.scss';
import BtnWithIcon from '@/components/common/BtnWithIcon';

export default function CustomCocktailImageUpload() {
  const [image, setImage] = useState(null);
  const fileInput = useRef<HTMLDivElement>(null);

  const handleUploadImage = () => {
    if (fileInput.current != null) {
      fileInput.current.click();
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setImage(e.target.result);
      }
    };
  };

  return (
    <div className={styles.container}>
      <a href="#" onClick={handleUploadImage}>
        <div className={styles['uploaded-image']}>
          {image ? (
            <img src={image} alt="Uploaded" />
          ) : (
            <div className={styles['uploaded-image']} />
          )}
        </div>
      </a>
      <div className={styles.uploaded}>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleImage}
        />
      </div>
      <div className={styles['upload-button']}>
        <BtnWithIcon
          text="파일 선택"
          btnStyle="full-dark"
          handleOnClick={handleUploadImage}
        />
      </div>
    </div>
  );
}
