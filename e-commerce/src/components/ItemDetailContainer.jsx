import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const {itemId} = useParams()

    useEffect (() => {
        getProductById(itemId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

  return (
    <div>
        <ItemDetail {...products} />
    </div>
  )
}

export default ItemDetailContainer