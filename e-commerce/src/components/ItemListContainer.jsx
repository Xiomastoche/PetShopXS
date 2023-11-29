import React from 'react'
import { useState, useEffect } from 'react'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  const { categoryId } = useParams ()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection( db, 'products' );
        let productQuery;
        if (categoryId) {
          const categoryQuery = where('category', '==', categoryId.toString());
          productQuery = query(productsCollection, categoryQuery);
        } else {
          productQuery = productsCollection;
        }
        const productSnapshot = await getDocs(productQuery);

        if (!productSnapshot.empty) {
          const productsData = productSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productsData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    
      fetchProducts();
    
  }, [categoryId]);


  return (
    <div>
      
      <ItemList products= {products} />
        
    </div>
  )
}

export default ItemListContainer
