import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import carrito from '../img/shop.png';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  

  return (
    <div className='border rounded-1 bg-info border-info p-2'>
      <Link to="/Cart" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
        <img src={carrito} alt="" width="34" />
        {totalItems}
      </Link>
    </div>
  )
}

export default CartWidget;
