import styles from './SearchBlock.module.scss';

interface listType {
  id: string;
  name: string;
}

interface propsType {
  list: listType[];
  state: string;
  handleState: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBlock(props: propsType) {
  const { list, state, handleState } = props;

  return (
    <div className={styles.container}>
      {list.map((now) => (
        <button
          key={now.id}
          value={now.id}
          className={`${styles.block} ${state === now.id ? styles.selected : ''}`}
          onClick={handleState}
        >
          {now.name}
        </button>
      ))}
    </div>
  );
}
