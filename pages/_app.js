import '../styles/globals.css'
import CartContext from '../context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={[cartProducts, setCartProducts]}>
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
