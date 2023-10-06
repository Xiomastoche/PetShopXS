import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logopet.png';
import carrito from '../img/carrito.png';

const NavBar = () => {

  return (
    <>
        <nav className='navbar fixed-top navbar-expand-lg bg-primary'>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col mx-2'>
                    <a className='navbar-brand' href="#">
                        <img src={logo} alt="" width="90" className='img-fluid'/>
                    </a>
                    </div>
                    <div className='col'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'> <a className='nav-link' href="#"> Inicio </a></li>
                        <li className='nav-item'> <a className='nav-link' href="#"> Productos </a></li>
                        <li className='nav-item'> <a className='nav-link' href="#"> Contacto </a></li>
                    </ul>
                    </div>
                    <div className='col'>
                    <a href="#">
                        <img src={carrito} alt="" width="40" className='cimg-fluid'/>
                    </a> 
                    </div>
                </div>
                
            </div>
        </nav>
    </> 
  )
}

export default NavBar;