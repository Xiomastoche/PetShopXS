import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../asyncMock'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])

  useEffect (() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div>
        <ItemList products= {products} />
    </div>
  )
}

export default ItemListContainer
