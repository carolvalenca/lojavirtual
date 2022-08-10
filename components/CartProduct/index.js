import styles from './CartProduct.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { colocarVirgula } from '../../utils/stringFunctions';
import { useContext } from 'react';
import { CartContext } from '../../context';

export default function CartProduct({ product }) {
  const { deleteProductCart, manageCartProduct } = useContext(CartContext);

  const values = [
    { value: 1, label: '1 unidade' },
    { value: 2, label: '2 unidades' },
    { value: 3, label: '3 unidades' },
    { value: 4, label: '4 unidades' },
    { value: 5, label: '5 unidades' },
  ];

  return (
    <div className={styles.cartProductContainer} data-test-id='cartProduct'>
      <img src={product.image} className={styles.cartProductImg} />
      <div className={styles.cartProductInfoContainer}>
        <div className={styles.cartProductInfoHeader}>
          <h3>{product.name}</h3>
          <button onClick={() => deleteProductCart(product)}>
            <FaRegTrashAlt size={15} />
          </button>
        </div>
        <p>Tamanho: {product.size}</p>
        <div className={styles.priceContainer}>
          <select
            name='select'
            onChange={(event) =>
              manageCartProduct(product, parseInt(event.target.value))
            }
          >
            {values.map((item) => (
              <option
                key={item.value}
                value={item.value}
                selected={product.quantity === item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
          <p className={styles.priceLabel}>
            R$ {colocarVirgula((product.price * product.quantity).toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
}
