import React, { Fragment } from 'react'
import logo from '../../images/logo_completo.png'
export const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-md navbar-ligth  fondo border-5 border-bottom border-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <div className='navbar-brand'>
                        <img className='img-fluid' src={logo} alt="International Academy"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ms-auto me-4 mb-2 mb-md-0 cafe">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><b>HOME</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a href='/services' className="nav-link">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">CONTACT US</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Control Panel</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/admin/dashboard">Adm. Servicios</a></li>
                                    <li><a className="dropdown-item" href="#">Preinscripciones</a></li>
                                    <li><a className="dropdown-item" href="#">mi cuenta</a></li>
                                    <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
