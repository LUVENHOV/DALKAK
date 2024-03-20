import styles from './CustomCocktailImageUpload.module.scss';

export default function CustomCocktailImageUpload() {
  return (
    <div className={styles.container}>
      <div className={styles['uploaded-image']}></div>
      <button className={styles['upload-button']}>파일 선택</button>
    </div>
  );
}
