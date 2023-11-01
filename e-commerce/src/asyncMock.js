const products = [
    {
      id: '1',
      name: 'IPhone 12 Pro',
      img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro/iphone-12-pro-graphite.jpg',
      description: 'Iphone 12 Pro de 256GB',
      category: 'celular',
      price: 1800000,
      stock: 25,
    },
    {
      id: '2',
      name: 'AirPods Pro',
      img: 'https://images.start.com.ar/MQD83AMA.jpg',
      description: 'AirPods Pro 3° generación',
      category: 'audio',
      price: 120000,
      stock: 50,
    },
    {
      id: '3',
      name: 'IPad Pro 6° generación',
      img:'https://maximstore.com/wp-content/uploads/2023/05/iPad_Pro_Wi-Fi_11_in_4th_generation_Space_Gray_PDP_Image_Position-1b_MXLA.jpg',
      description: 'Ipad Pro 6° generación de 256GB',
      category: 'tablet',
      price: 500000,
      stock: 75,
    },
    {
      id: '4',
      name: 'Samsung Galaxy Fold 5',
      img: 'https://naldoar.vtexassets.com/arquivos/ids/172516-800-800?v=638273776981930000&width=800&height=800&aspect=true',
      description: 'Samsung Fold 5 Pro de 512GB',
      category: 'celular',
      price: 1160000,
      stock: 20,
    },
    {
      id: '5',
      name: 'Samsung Galaxy Buds',
      img: 'https://www.ideahogar.com.ar/9173-medium_default/auricular-inalambrico-samsung-buds-pro-sm-r190-phantom-black.jpg',
      description: 'Samsung Galaxy Buds Pro Black',
      category: 'audio',
      price: 98000,
      stock: 40,
    },
    {
      id: '6',
      name: 'Samsung Galaxy Tab',
      img:'https://www.cdmarket.com.ar/image/0/1000_1300-101378.jpg',
      description: 'Tablet Samsung Galaxy Tab S6 de 64GB',
      category: 'tablet',
      price: 300000,
      stock: 35,
    }
];

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

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category))
    }, 1000)
  })
}