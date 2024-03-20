import styles from './SearchColor.module.scss';

const colorList = [
  {
    id: '1',
    name: 'red',
    korName: '빨강',
  },
  {
    id: '9',
    name: 'orange',
    korName: '주황',
  },
  {
    id: '3',
    name: 'yellow',
    korName: '노랑',
  },
  {
    id: '6',
    name: 'green',
    korName: '초록',
  },
  {
    id: '8',
    name: 'blue',
    korName: '파랑',
  },
  {
    id: '10',
    name: 'purple',
    korName: '보라',
  },
  {
    id: '7',
    name: 'pink',
    korName: '분홍',
  },
  {
    id: '2',
    name: 'brown',
    korName: '갈색',
  },
  {
    id: '4',
    name: 'white',
    korName: '하양',
  },
  {
    id: '5',
    name: 'clear',
    korName: '무색',
  },
];

interface propsType {
  color: string;
  handleColor: () => void;
}

export default function SearchColor(props: propsType) {
  const { color, handleColor } = props;

  return (
    <div className={styles.container}>
      {colorList.map((c) => (
        <div
          className={`${styles.btnArea} ${color === c.id ? styles.selected : ''}`}
          key={c.id}
        >
          <button
            value={c.id}
            className={`${styles.btn} ${styles[c.name]}`}
            onClick={handleColor}
          ></button>
          <div className={styles.title}>{c.korName}</div>
        </div>
      ))}
    </div>
  );
}
