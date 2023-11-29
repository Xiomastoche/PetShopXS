import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/CheckOut';


function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>} />
          <Route path='/category/:categoryId' element= {<ItemListContainer/>} />
          <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
          <Route path='/Cart' element= {<Cart/>} /> 
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element= {<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
