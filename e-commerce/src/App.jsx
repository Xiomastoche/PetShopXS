//estilos
import 'bootstrap/dist/css/bootstrap.min.css';

//componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer mensaje="Bienvenido a nuestra tienda Vegan!" />
    </>
  )
}

export default App;
