import Image from 'next/image';
import { colocarVirgula } from '../../utils/stringFunctions';
import styles from './ProductCard.module.css';
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className={styles.cardcontainer}>
      <img
        src={product.image}
        alt='product image'
        style={{ position: 'relative', maxWidth: '100%', height: 'auto' }}
      />
      <span style={{ margin: '0.5rem 0' }}>{product.name}</span>
      <span style={{ marginBottom: '0.5rem' }}>R$ {colocarVirgula(product.price)}</span>
      <Link href={`/details/${product.id}`}>
        <a style={{ marginBottom: '0.5rem' }}>ver detalhes</a>
      </Link>
      {/* <button style={{ marginBottom: '0.5rem' }}>ver detalhes</button> */}
    </div>
  );
}
