import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  const {categoryId} = useParams ()

  useEffect (() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId])


  return (
    <div>
      <ItemList products= {products} />
    </div>
  )
}

export default ItemListContainer
