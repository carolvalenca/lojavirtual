import styles from './Header.module.css';
import { TbShoppingCart } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import {CartContext} from '../../context';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const {quantityCartProducts} = useContext(CartContext)
  const router = useRouter();

  return (
    <header className={styles.header}>
      <GiHamburgerMenu size={35} className={styles.hbmenu} />
      <h1 className={styles.pageLogo}>Loja Virtual</h1>
      <div className={styles.linksContainer}>
        <Link href='/'>
          <a className={`${router.pathname === '/' && styles.selected}`}>
            PRODUTOS
          </a>
        </Link>
        <a>COLEÇÕES</a>
        <a>MARCAS</a>
      </div>
      <Link href='/cart'>
        <div
          data-test-id='cartButton'
          style={{
            justifySelf: 'flex-end',
            position: 'relative',
            padding: '0.4rem 0.45rem',
          }}
        >
          <span className={styles.productsQuantity}>
            {quantityCartProducts}
          </span>
          <TbShoppingCart size={24} />
        </div>
      </Link>
    </header>
  );
}
