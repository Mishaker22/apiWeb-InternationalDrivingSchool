import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../images/logo_completo.png'
import { Link, NavLink } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/user_actions'

export const NavBar = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
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
                                <span>
                                    <NavLink to={"/"} className="nav-link">HOME</NavLink>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span>
                                    <NavLink to={"/abouts_us"} className="nav-link">ABOUT US</NavLink>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span>
                                    <NavLink to={"/services"} className="nav-link">SERVICES</NavLink>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span>
                                    <NavLink to={"/contact_us"} className="nav-link">CONCTACT</NavLink>
                                </span>
                            </li>
                            {/*Si estoy logueada*/}
                            {user ? (
                                <li className="nav-item dropdown">
                                    
                                        <NavLink className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                            <figure className='avatar avatar-nav'>
                                                <img
                                                    src={user.avatar && user.avatar.url}
                                                    alt={user && user.nombre}
                                                    className="rounded-circle"></img>
                                            </figure>
                                            <span>
                                                {user && user.nombre}
                                            </span>
                                        </NavLink>
                                    
                                    <ul className="dropdown-menu">
                                        {user && user.role === "admin" && (
                                            <li><a className="dropdown-item" href="/admin/dashboard">Adm. Servicios</a></li>
                                        )}

                                        <li><a className="dropdown-item" href="#">Preinscripciones</a></li>
                                        <li><a className="dropdown-item" href="/MyProfile">Profile</a></li>
                                        <li><NavLink className="dropdown-item" to={"/"} onClick={logoutHandler}>Log out</NavLink></li>
                                    </ul>
                                </li>
                            ) : !loading && <span><NavLink to={"login"} className=" nav-link" id='login_btn'>LOGIN</NavLink></span>}

                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
