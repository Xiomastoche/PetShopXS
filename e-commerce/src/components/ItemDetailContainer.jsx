import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    useEffect (() => {
        getProductById('1')
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <div>
        <ItemDetail {...products} />
    </div>
  )
}

export default ItemDetailContainer