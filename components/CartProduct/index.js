import styles from './CartProduct.module.css';
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import { colocarVirgula } from '../../utils/stringFunctions';
import { useContext } from 'react';
import {CartContext} from '../../context';


export default function CartProduct({product}) {
    const {deleteProductCart, manageCartProduct} = useContext(CartContext);

  return (
    <div style={{borderBottom: '1px solid #dedede', paddingBottom: '0.4rem', display: 'flex', marginBottom: '2rem'}}>
        <img src={product.image} style={{ width: '10rem', height: '10rem' }} />
        <div style={{flexGrow: 1, marginLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h3 style={{margin: 0}}>{product.name}</h3>
                <button onClick={() => deleteProductCart(product)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                    <FaRegTrashAlt size={15}/>
                </button>
            </div>
            <p>Tamanho: {product.size}</p>
            <div className={styles.priceContainer}>
                <select name="select" onChange={(event) => manageCartProduct(product, parseInt(event.target.value))}>
                    <option value="1" selected={product.quantity === 1}>1 unidade</option>
                    <option value="2" selected={product.quantity === 2}>2 unidades</option>
                    <option value="3" selected={product.quantity === 3}>3 unidades</option>
                    <option value="4" selected={product.quantity === 4}>4 unidades</option>
                    <option value="5" selected={product.quantity === 5}>5 unidades</option>
                </select>
                <p className={styles.priceLabel}>R$ {colocarVirgula((product.price * product.quantity).toFixed(2))}</p>
            </div>
        </div>
    </div>
  );
}
