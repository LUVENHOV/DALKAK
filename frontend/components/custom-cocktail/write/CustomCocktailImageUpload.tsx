'use client';

import React, { useState, useRef, ChangeEvent } from 'react';

import styles from './CustomCocktailImageUpload.module.scss';
import BtnWithIcon from '@/components/common/BtnWithIcon';

export default function CustomCocktailImageUpload() {
  const [image, setImage] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    if (fileInput.current != null) {
      fileInput.current.click();
    }
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (reader.readyState === 2 && event.target) {
        setImage(event.target.result as string);
      }
    };
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleUploadImage}>
        <div className={styles['uploaded-image']}>
          {image ? (
            <img src={image} alt="Uploaded" />
          ) : (
            <div className={styles['uploaded-image']} />
          )}
        </div>
      </button>
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
