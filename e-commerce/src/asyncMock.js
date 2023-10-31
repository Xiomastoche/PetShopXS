const products = [
    {
      id: '1',
      name: 'Iphone 12 Pro',
      img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro/iphone-12-pro-graphite.jpg',
      description: 'Descripcion del producto',
      category: 'celular',
      price: 1000000,
      stock: 25,
    },
    {
      id: '2',
      name: 'AirPods Pro',
      img: 'https://images.start.com.ar/MQD83AMA.jpg',
      description: 'Descripcion del producto',
      category: 'audio',
      price: 120000,
      stock: 50,
    },
    {
      id: '3',
      name: 'Ipad Pro 6ta generación',
      img:'https://maximstore.com/wp-content/uploads/2023/05/iPad_Pro_Wi-Fi_11_in_4th_generation_Space_Gray_PDP_Image_Position-1b_MXLA.jpg',
      description: 'Descripcion del producto',
      category: 'tablets',
      price: 500000,
      stock: 75,
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })
}

export const getProductById = (productId) => {
  return new Promise ((resolve) =>{
    setTimeout(()=>{
      resolve(products.find(prod => prod.id === productId))
    }, 1000)
  })
}
