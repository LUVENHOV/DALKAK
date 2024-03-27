import styles from './SearchBlock.module.scss';

interface listType {
  id: number;
  name: string;
}

interface propsType {
  list: listType[];
  state: number | null;
  handleState: (base: number) => void;
}

export default function SearchBlock(props: propsType) {
  const { list, state, handleState } = props;

  return (
    <div className={styles.container}>
      {list.map((now) => (
        <button
          type="button"
          key={now.id}
          value={now.id}
          className={`${styles.block} ${state === now.id ? styles.selected : ''}`}
          onClick={() => handleState(now.id)}
        >
          {now.name}
        </button>
      ))}
    </div>
  );
}
