import React from 'react';
import carrito from '../img/shop.png';

const CartWidget = () => {
  return (
    <div className='border rounded-1 bg-info border-info p-2'>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }} >
        <img src={carrito}  alt="" width="36"/>
        0
        </a>
    </div>
  )
}

export default CartWidget