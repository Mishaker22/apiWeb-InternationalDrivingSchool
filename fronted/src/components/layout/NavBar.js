import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../images/logo_completo.png'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/user_actions'

export const NavBar = () => {

    const alert = useAlert();
    const dispatch= useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler=()=>{
        dispatch(logout());
        alert.success("logOut")
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-md navbar-ligth  fondo border-5 border-bottom border-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <div className='navbar-brand'>
                        <img className='img-fluid ms-5' src={logo} alt="International Academy"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-md-0 cafe">
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
                            {/*Si estoy logueada*/}
                            {user ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"><span>
                                        {user && user.nombre} </span></a>
                                    <ul className="dropdown-menu">
                                        {user && user.role === "admin" &&(
                                            <li><a className="dropdown-item" href="/admin/dashboard">Adm. Servicios</a></li>
                                        )}
                                        
                                        <li><a className="dropdown-item" href="#">Preinscripciones</a></li>
                                        <li><a className="dropdown-item" href="/MyProfile">Profile</a></li>
                                        <li><Link className="dropdown-item" to={"/"} onClick={logoutHandler}>Log out</Link></li>
                                    </ul>
                                </li>
                            ):!loading && <Link to={"login"} className="btn ms-4 border border-dark-2" id='login_btn'>LOGIN</Link>}

                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
