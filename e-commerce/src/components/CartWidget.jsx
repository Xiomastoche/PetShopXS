import React from 'react';
import carrito from '../img/shop.png';

const CartWidget = () => {
  return (
    <div>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }} >
        <img src={carrito}  alt="" width="40"/>
        0
        </a>
    </div>
  )
}

export default CartWidget