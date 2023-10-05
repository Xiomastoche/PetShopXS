import logo from '../../img/logopet.png';
import carrito from '../../img/carrito.png';

const NavBar = () => {

  return (
    <>
        <header>
            <div className="containerBrand">
                <a href="#">
                    <img src={logo} alt="" className='logo'/>
                </a>
            </div>
            <div className="containerList">
                <ul>
                    <li> <a href="#"> Inicio </a></li>
                    <li> <a href="#"> Productos </a></li>
                    <li> <a href="#"> Contacto </a></li>
                </ul>
            </div>
            <div className="containerCarrito">
                <a href="#">
                    <img src={carrito} alt=""className='carrito'/>
                </a> 
            </div>
        </header>
    </> 
  )
}

export default NavBar;