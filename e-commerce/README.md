# TecnoPoint

Este proyecto fue creado para el curso de React dictado por [Coderhouse](https://www.coderhouse.com/) 

TecnoPoint es un eccomerce especializado en productos tecnológicos. Ofrece una variedad de productos distribuidos en categorías específicas. 

## Descripcion del Proyecto 

1. En la pagina inicio se pueden ver todos los productos disponibles con su respectiva imagen, nombre, precio, stock y un boton de detalle que deriva a otra vista.
2. Tambien, desde la navbar se puede navegar por cada categoría especifica: celular, audio, tablet y notebook. 
3. Al hacer click en el boton 'ver detalle' de un producto, se muestra el producto con su imagen, nombre, descripcion, precio, dos botones para agregar/disminuir cantidades y un boton para agregarlo al carrito.
4. Al hacer click en el boton 'agregar al carrito', aparece un spinner que posteriormente se cargara un alert notificandole al comprador que el producto fue agregado y dos botones, uno de seguir comprando y otro de terminar compra que te lleva a la pagina de Cart.
5. En cart veremos el detalle de los productos agregados al carrito (cantidad, imagen, nombre, subtotal y total) y dos botones, uno de volver al listado y otro de checkout para finalizar la compra.
6. En Checkout aparecera el form que el comprador debe completar con sus datos para terminar la compra, y al costado el resumen del carrito con su total. 
7. Al clickear el boton 'finalizar compra' aparecera un mensaje con el id de la orden de compra realizada.
8. Firestore contiene los productos, y almacena los datos del comprador que completo en form para luego retornarle el id de la orden de compra.

## Herramientas utilizadas

- [React](https://es.reactjs.org/) 
- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [React-router-dom](https://v5.reactrouter.com/)
- [Firebase](https://firebase.google.com/)

## Ejecutar la Aplicación 

Asegurate de tener [Node.js](https://nodejs.org/en) instalado.

1. Clona este repositorio de github.
2. Instala las dependencias con npm install en la terminal
3. Y luego, corre el comando npm run dev

## Creador

**Xiomara Stochetta**
