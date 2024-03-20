import styles from './SearchBase.module.scss';

const baseList = [
  {
    id: '1',
    name: '샴페인',
  },
  {
    id: '2',
    name: '럼',
  },
  {
    id: '3',
    name: '위스키',
  },
  {
    id: '4',
    name: '보드카',
  },
  {
    id: '5',
    name: '진',
  },
  {
    id: '6',
    name: '테킬라',
  },
  {
    id: '7',
    name: '브랜디',
  },
  {
    id: '8',
    name: '리큐어',
  },
  {
    id: '9',
    name: '와인',
  },
  {
    id: '10',
    name: '비터즈',
  },
];

interface propsType {
  base: string;
  handleBase: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBase(props: propsType) {
  const { base, handleBase } = props;

  return (
    <div className={styles.container}>
      {baseList.map((b) => (
        <button
          key={b.id}
          value={b.id}
          className={`${styles.block} ${base === b.id ? styles.selectedBlock : ''}`}
          onClick={handleBase}
        >
          {b.name}
        </button>
      ))}
    </div>
  );
}
