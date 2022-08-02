import styles from './Header.module.css';
import { TbShoppingCart } from "react-icons/tb";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Loja Virtual</h1>
      <div style={{ justifySelf: 'center' }}>
        <a className={styles.selected}>Novos</a>
        <a>Coleções</a>
        <a>Marcas</a>
      </div>
      <TbShoppingCart size={24} style={{ justifySelf: 'flex-end' }} />
    </header>
  );
}
