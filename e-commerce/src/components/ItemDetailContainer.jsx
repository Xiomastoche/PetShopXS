import React from 'react'
import { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const db = getFirestore();
            const queryDoc = doc( db, 'products', itemId );
            const productDoc = await getDoc(queryDoc);
    
            if (productDoc.exists()) {
              setProduct({ id: productDoc.id, ...productDoc.data() });
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProduct();
    }, [itemId]);
    

  return (
    <div>
        {product && <ItemDetail {...product} />}
    </div>
  )
}

export default ItemDetailContainer