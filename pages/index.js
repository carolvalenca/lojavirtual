import styles from '../styles/Home.module.css';
import productsData from '../data/productsData.json';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';
import SearchInput from '../components/SearchInput';

export default function About() {
  const [products, setProducts] = useState(productsData.products);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  })

  function searchByName(filter) {
    let arr = [];
    arr = productsData.products.filter((elem) =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
    setProducts(arr);
  }

  return (
    <Layout pageTitle='main'>
      <div className={styles.titleContainer}>
        <h3>Produtos</h3>
        <SearchInput searchByName={searchByName}/>
      </div>
      <div className={styles.teste}>
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </Layout>
  );
}
