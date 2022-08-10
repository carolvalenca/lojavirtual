import { colocarVirgula } from '../../utils/stringFunctions';
import styles from './ProductCard.module.css';
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className={styles.cardcontainer}>
      <img
        src={product.image}
        alt='product image'
        className={styles.productImg}
      />
      <span style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>{product.name}</span>
      <span style={{ marginBottom: '0.5rem' }}>
        R$ {colocarVirgula(product.price)}
      </span>
      <Link href={`/details/${product.id}`}>
        <a className={styles.viewDetailsButton}>ver detalhes</a>
      </Link>
    </div>
  );
}
