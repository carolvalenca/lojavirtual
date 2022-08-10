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
  const [selectedSize, setSelectedSize] = useState();

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  useEffect(() => {
    const product = productsData.products.filter(
      (product) => product.id == productid
    );
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
          className={styles.productImg}
        />
        <div className={styles.productDescription}>
          <h2>{product.name}</h2>
          <span style={{ color: 'gray' }}>{product.description}</span>
          <span className={styles.productPrice}>
            R$ {product.price && colocarVirgula(product.price)}
          </span>
          <div className={styles.sizesButtonsContainer}>
            {sizes.map((size, index) => (
              <SizeButton
                key={index}
                label={size}
                selectedSize={selectedSize === size}
                setSelectedSize={() => setSelectedSize(size)}
              />
            ))}
          </div>
          <button
            className={styles.addToCartButton}
            onClick={() => addProductCart({ ...product, size: selectedSize })}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </Layout>
  );
}
