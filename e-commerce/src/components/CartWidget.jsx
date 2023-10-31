import React from 'react';
import carrito from '../img/shop.png';

const CartWidget = () => {
  return (
    <div>
        <a href="#">
        <img src={carrito}  alt="" width="40"/>
        0
        </a>
    </div>
  )
}

export default CartWidget