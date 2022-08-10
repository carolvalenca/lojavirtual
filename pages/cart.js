import { useContext } from 'react';
import styles from '../styles/Cart.module.css';
import { CartContext } from '../context';
import CartProduct from '../components/CartProduct';
import { colocarVirgula } from '../utils/stringFunctions';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmptyCart = () => (
  <div className={styles.emptyCart}>
    <TiShoppingCart size={70} />
    <p style={{ fontSize: '1.5rem', marginBottom: 0 }}>
      Seu carrinho está vazio
    </p>
    <p style={{ color: 'gray' }}>
      Adicione produtos clicando no botão “Adicionar ao carrinho” na página de
      produto.
    </p>
    <Button type={2} label='VOLTAR PARA A PÁGINA INICIAL' />
  </div>
);


const CartWithProducts = ({
  cartProducts,
  quantityCartProducts,
  totalPrice,
}) => (
  <div className={styles.cartInfo}>
    <div style={{ width: '100%' }}>
      <div className={styles.productsContainerHeader}>
        <p>Sacola de compras</p>
        <p>{cartProducts.length} itens</p>
      </div>
      {cartProducts.map((product, index) => (
        <CartProduct key={index} product={product} />
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p className={styles.productsPriceHeader}>Resumo</p>
      <div className={styles.productsSubtotal}>
        <p>Subtotal {`(${quantityCartProducts} itens)`}</p>
        <p style={{ fontWeight: 'bold' }}>
          R$ {colocarVirgula(totalPrice.toFixed(2))}
        </p>
      </div>
      <div className={styles.productsTotalPriceContainer}>
        <p>Total</p>
        <div className={styles.productsTotalPrice}>
          <p style={{ fontWeight: 'bold' }}>
            R$ {colocarVirgula(totalPrice.toFixed(2))}
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            em até 5x de <b>R$ {colocarVirgula((totalPrice / 5).toFixed(2))}</b>
          </p>
        </div>
      </div>
      <Button type={1} label='FINALIZAR COMPRA' />
      <Button type={2} label='CONTINUAR COMPRANDO' />
    </div>
  </div>
);

export default function Cart() {
  const { cartProducts, quantityCartProducts, totalPrice } =
    useContext(CartContext);

  return (
    <Layout pageTitle='cart'>
      <ToastContainer />
      <BackButton />
      {quantityCartProducts === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithProducts
          cartProducts={cartProducts}
          quantityCartProducts={quantityCartProducts}
          totalPrice={totalPrice}
        />
      )}
    </Layout>
  );
}
