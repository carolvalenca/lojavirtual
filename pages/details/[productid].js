import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import productsData from '../../data/productsData.json';
import styles from '../../styles/Details.module.css';
import { colocarVirgula } from '../../utils/stringFunctions';
import { CartContext } from '../../context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import SizeButton from '../../components/SizeButton';

export default function Details() {
  const router = useRouter();
  const { productid } = router.query;

  const [product, setProduct] = useState({});
  const { addProductCart } = useContext(CartContext);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const product = productsData.products.filter((product) => product.id == productid);
    setProduct(product[0]);
  }, [productid]);

  return (
    <Layout pageTitle='details'>
      <ToastContainer />
      <BackButton />
      <div className={styles.productInfo}>
        <img
          src={product.image}
          alt='product image'
          style={{
            width: '27rem',
            height: 'auto',
            borderRadius: '1rem',
            justifySelf: 'flex-end',
          }}
        />
        <div className={styles.productDescription}>
          <h2>{product.name}</h2>
          <span style={{ color: 'gray' }}>{product.description}</span>
          <span
            style={{
              marginTop: '1rem',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            R$ {product.price && colocarVirgula(product.price)}
          </span>
          <div className={styles.sizesButtonsContainer}>
            <SizeButton label='XS' selectedSize={selected === 'XS'} setSelectedSize={() => setSelected('XS')}/>
            <SizeButton label='S' selectedSize={selected === 'S'} setSelectedSize={() => setSelected('S')}/>
            <SizeButton label='M' selectedSize={selected === 'M'} setSelectedSize={() => setSelected('M')}/>
            <SizeButton label='L' selectedSize={selected === 'L'} setSelectedSize={() => setSelected('L')}/>
            <SizeButton label='XL' selectedSize={selected === 'XL'} setSelectedSize={() => setSelected('XL')}/>
          </div>
          <button
            className={styles.addToCartButton}
            onClick={() => addProductCart({ ...product, size: selected })}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </Layout>
  );
}
