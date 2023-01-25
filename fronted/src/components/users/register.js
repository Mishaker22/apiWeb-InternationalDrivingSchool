import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import registerfondo from '../../images/register.png'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/user_actions'
import { Link, useNavigate } from 'react-router-dom'


export const Register = () => {
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        genero: ""
    })
    const generos = [
        "Femenino",
        "Masculino",
        "Otro"
    ]
    const { nombre, apellido, email, password, genero } = user;
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error, alert])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("nombre", nombre);
        formData.set("apellido", apellido);
        formData.set("email", email);
        formData.set("password", password);
        formData.set("genero", genero);

        dispatch(register(formData))
    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title="Register"></MetaData>
                    <div className='backgroundRegister'>
                        <div className='container container-fluid'>
                            <div className="row d-flex justify-content-center">
                                <div className='col-8'>
                                    <div className="card rounded-3 m-1 text-black">
                                        <img src={registerfondo} className="card-img-top cardRegister bd-placeholder-img text-white" aria-label='Placeholder: Register' alt='international'></img>
                                        <div class="card-body p-md-5 mx-md-4">
                                            <h2 className="card-title modern text-center">Registro</h2>
                                            <form encType='multipart/form-data' onSubmit={submitHandler}>
                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='name_field'>Nombre</label>
                                                    <input type="name" id="name_field" className="form-control"
                                                        name='nombre' value={nombre} onChange={onChange} />
                                                </div>
                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='lastName_field'>Apellido</label>
                                                    <input type="lastName" id="lastName_field" className="form-control"
                                                        name='apellido' value={apellido} />
                                                </div>
                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='email_field'>Email</label>
                                                    <input type="email" id="email_field" className="form-control"
                                                        name='email' value={email} onChange={onChange} />
                                                </div>
                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='password_field'>Clave</label>
                                                    <input type="password" id="password_field" className="form-control"
                                                        name='password' value={password} onChange={onChange} />
                                                </div>
                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='genero_field'>Genero</label>
                                                    <select id='genero_field' name='genero' className='form-control'
                                                        value={genero} onChange={onChange} >
                                                        {generos.map(genero => (
                                                            <option key={genero} value={genero}>{genero} </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button class=" w-100 btn btn-primary btn-block fa-lg backgroundMega border border-dark mb-3" id='login_button' type="submit">Registrarme </button>
                                                </div>
                                            </form>
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
