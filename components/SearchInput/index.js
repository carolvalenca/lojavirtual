import { FaSearch } from 'react-icons/fa';
import styles from './SearchInput.module.css';

export default function SearchInput({ searchByName }) {
  return (
    <div className={styles.searchInputContainer}>
      <FaSearch size={20} color='gray' className={styles.searchIcon} />
      <input
        type='text'
        placeholder='Procure por um produto...'
        onChange={(event) => searchByName(event.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}
