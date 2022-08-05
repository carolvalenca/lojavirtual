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

export default function Cart() {
  const { cartProducts, quantityCartProducts, totalPrice } =
    useContext(CartContext);

  return (
    <Layout pageTitle='cart'>
      <ToastContainer />
      <BackButton />
      {quantityCartProducts === 0 ? (
        <div className={styles.emptyCart}>
          <TiShoppingCart size={70} />
          <p style={{fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 0, textAlign: 'center'}}>Seu carrinho está vazio</p>
          <p style={{fontWeight: 'bold', fontSize: '1.1rem', color: 'gray', textAlign: 'center'}}>
            Adicione produtos clicando no botão “Adicionar ao carrinho” na
            página de produto.
          </p>
          <Button type={2} label='VOLTAR PARA A PÁGINA INICIAL' />
        </div>
      ) : (
        <div className={styles.cartInfo}>
          <div style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F5F5F5',
                marginBottom: '1rem',
                padding: '0.5rem 0.5rem',
              }}
            >
              <p style={{ margin: 0 }}>Sacola de compras</p>
              <p style={{ margin: 0 }}>{cartProducts.length} itens</p>
            </div>
            {cartProducts.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                backgroundColor: '#F5F5F5',
                margin: 0,
                padding: '0.5rem 0.5rem',
              }}
            >
              Resumo
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
              }}
            >
              <p style={{ color: 'gray', fontSize: '0.9rem' }}>
                Subtotal {`(${quantityCartProducts} itens)`}
              </p>
              <p
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                R$ {colocarVirgula(totalPrice.toFixed(2))}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f5f5f5',
                borderTop: '1px solid #dedede',
                padding: '1rem 1.5rem',
              }}
            >
              <p>Total</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <p style={{ margin: 0, fontWeight: 'bold' }}>
                  R$ {colocarVirgula(totalPrice.toFixed(2))}
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  em até 5x de{' '}
                  <b>R$ {colocarVirgula((totalPrice / 5).toFixed(2))}</b>
                </p>
              </div>
            </div>
            <Button type={1} label='FINALIZAR COMPRA' />
            <Button type={2} label='CONTINUAR COMPRANDO' />
          </div>
        </div>
      )}
    </Layout>
  );
}
