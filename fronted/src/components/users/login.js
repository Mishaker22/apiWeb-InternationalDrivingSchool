import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, login } from '../../actions/user_actions'
import logo from '../../images/logoneww.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

export const Login = () => {

    const navigate = useNavigate();
    const alert = useAlert();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.login)

    useEffect(() => {

        if (isAuthenticated) {
            navigate("/home")
            alert.success("")
            window.location.reload(false)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title="Login"></MetaData>
                    <div className='backgroundForm py-1 d-flex justify-content-center align-items-center'>
                        <div className='container container-fluid '>
                            <div className="row  d-flex justify-content-center align-items-center">
                                <div class="col-5">
                                    <div className="card rounded-3 text-white my-2 colorService">
                                        <div class="row g-0">
                                            <div class="col-lg-12 ">
                                                <div class="card-body p-md-5 mx-md-4">
                                                    <h4 class="mb-4 text-center">Por Favor Ingrese Su Cuenta</h4>
                                                    <form onSubmit={submitHandler}>
                                                        <div className="form-group mb-4">
                                                            <label className="form-label" htmlFor='email_field'>Usuario</label>
                                                            <input type="email" id="email_field" className="form-control" placeholder="email address"
                                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>

                                                        <div class="form-group mb-4">
                                                            <label className="form-label" htmlFor='password_field'>Contraseña</label>
                                                            <input type="password" id="password_field" className="form-control"
                                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        </div>

                                                        <div class="text-center pt-1 mb-5 pb-1">
                                                            <button class=" w-100 btn btn-primary btn-block fa-lg backgroundMega border border-dark mb-3" id='login_button' type="submit">Log in </button>
                                                            <Link class="text-muted" to="/forgotPassword">Forgot password?</Link>
                                                        </div>

                                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                                            <p class="mb-0 me-2">No tiene una cuenta?</p>
                                                            <button type="button" className="btn btn-outline-danger ">
                                                                <Link to={"/register"} className="text-white"> Registrarse </Link> </button>
                                                        </div>

                                                    </form>

                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

