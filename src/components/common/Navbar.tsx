
import '../../styles/Navbar.css';
import { Clock } from '../Clock';
import { NavLink } from 'react-router-dom';

type NavbarPropTypes = {
  toggleMenu: () => void
}

export const Navbar = ({toggleMenu}: NavbarPropTypes) => {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#/">
              <button type="button" className="btn btn-sm" onClick={toggleMenu}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </a>
            <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link text-end" href="#/">
                  <i className="fa-solid fa-clock"></i> <Clock></Clock>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-end" href="#/">
                  <i className="fa-solid fa-question-circle"></i> Ayuda
                </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a className="nav-link text-end dropdown-toggle p-1" data-bs-toggle="dropdown" href="#/">
                      <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle"></img>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#/">Configuraciones</a></li>
                       
                      <li>
                        <NavLink to="/login" className="dropdown-item">Cerrar Sesion</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
