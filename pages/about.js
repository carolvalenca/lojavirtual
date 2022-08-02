import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import teste from '../styles/teste.json'
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import Header from '../components/Header';

export default function About() {
    const [products, setProducts] = useState(teste.products);

    function filterProductsByName(filter) {
        let arr = []
        arr = teste.products.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()))
        setProducts(arr)
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>about</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section style={{padding: '1rem 4rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h3 style={{margin: 0}}>Novos</h3>
                <div>
                    {/* <img src={SearchIcon} alt="Search icon"></img> */}
                    <input type='text' placeholder='Search for a product...' onChange={(event) => filterProductsByName(event.target.value)}>
                    </input>
                </div>
            </div>
            {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}> */}
            <div className={styles.teste}>
                {products.map((item, index) => (
                    <ProductCard key={index} product={item}/>
                ))}
            </div>
        </section>
      </main>
    </div>
  )
}