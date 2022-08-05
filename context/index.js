import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantityCartProducts, setQuantityCartProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductCart = (product) => {
    if (!product.size) {
      toast.warn('Necessário escolher um tamanho para a peça!');
      return;
    }
    const findProduct = cartProducts.filter(
      (item) => item.id === product.id && item.size === product.size
    );

    if (findProduct.length === 0) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else if (findProduct[0].quantity === 5) {
        toast.error(`Limite máximo de peças ${product.name} de mesmo tamanho no carrinho atingido!`)
        return;
    } else {
      const teste = cartProducts.map((item) => {
        if (item.id === product.id && item.size === product.size) {
          item.quantity += 1;
        }

        return item;
      });

      setCartProducts(teste);
    }

    setQuantityCartProducts(quantityCartProducts + 1);
    const newTotalPrice = totalPrice + parseFloat(product.price);
      setTotalPrice(newTotalPrice);
};

  const deleteProductCart = (product) => {
    const newCart = cartProducts.filter((item) => item !== product);

    setCartProducts(newCart);
    setQuantityCartProducts(quantityCartProducts - product.quantity);
    const newTotalPrice =
      totalPrice - parseFloat(product.price) * product.quantity;
    setTotalPrice(newTotalPrice);
    toast.success('Produto removido do carrinho!');
  };

  const manageCartProduct = (product, newQuantity) => {
    console.log(newQuantity)
    const newCart = cartProducts.map(item => {
        if (item === product) {
            if (item.quantity > newQuantity) {
                const quantityNewProducts = newQuantity - item.quantity;
                setQuantityCartProducts(quantityCartProducts + quantityNewProducts);
                setTotalPrice(totalPrice + (parseFloat(item.price) * quantityNewProducts));
            } else {
                const quantityProductsDelete = item.quantity - newQuantity;
                setQuantityCartProducts(quantityCartProducts - quantityProductsDelete);
                setTotalPrice(totalPrice - (parseFloat(item.price) * quantityProductsDelete));
            }

            item.quantity = newQuantity;
        }

        return item;
    })

    setCartProducts(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        quantityCartProducts,
        totalPrice,
        addProductCart,
        deleteProductCart,
        manageCartProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
