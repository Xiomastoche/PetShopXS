import { createContext, useState } from 'react';
import { getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //probando si funciona
  //console.log(cart)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prev) =>
        prev.map((product) =>
          product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity, img: item.img }]);
    }
    updateStock(item.id, quantity * -1); // Reducir el stock al agregar productos al carrito
  }

  const updateStock = async (itemId, quantity) => {
    const db = getFirestore();
    const productRef = doc(db, 'products', itemId);

    // Obtener el documento actual del producto
    const productSnapshot = await getDoc(productRef);
    
    const currentStock = productSnapshot.data().stock;

    // Actualizar el stock en la base de datos
    await updateDoc(productRef, { stock: currentStock + quantity });
  };


  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    // Restaurar el stock al quitar productos del carrito, si es necesario
    const removedProduct = cart.find((prod) => prod.id === itemId);

    if (removedProduct) {
      updateStock(itemId, removedProduct.quantity);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const getTotal = () => {
    const total = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    return total;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
