import styles from './Header.module.css';
import { TbShoppingCart } from "react-icons/tb";
import CartContext from '../../context';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [cartProducts] = useContext(CartContext)
  const router = useRouter();

  return (
    <header className={styles.header}>
      <h1>Loja Virtual</h1>
      <div style={{ justifySelf: 'center' }}>
        <a className={`${router.pathname === '/about' && styles.selected}`}>Novos</a>
        <a>Coleções</a>
        <a>Marcas</a>
      </div>
      <Link href='/cart'>
        <div style={{ justifySelf: 'flex-end', position: 'relative', padding: '0.4rem 0.45rem' }}>
          <span className={styles.productsQuantity}>{cartProducts.length}</span>
          <TbShoppingCart size={24} />
        </div>
      </Link>
    </header>
  );
}
