import React, { useContext } from 'react';
import { useState } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

  return (
    <div className='border-top pt-3'>
    
        <ButtonGroup size="md" className="mb-2 mt-4">
            <Button variant='secondary px-3 rounded-0' onClick={decrement}> - </Button>
            <h4 className='Number px-4'> {quantity} </h4>
            <Button variant='secondary px-3 rounded-0' onClick={increment}> + </Button>
        </ButtonGroup>
        <Button variant='info px-5 mt-3 mx-4 rounded-0' size='md' onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
        </Button>
        
    </div>
  )
}

export default ItemCount