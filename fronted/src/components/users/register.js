import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import registerfondo from '../../images/register.png'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/user_actions'
import { useNavigate } from 'react-router-dom'


export const Register = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [genero, setGenero] = useState('');

    const generos = [
        "Otro",
        "Femenino",
        "Masculino",
    ]

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
        formData.set('nombre', nombre);
        formData.set('apellido', apellido);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('genero', genero);

        dispatch(register(formData))
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
                                        <div className='position-relative w-100'>
                                            <img src={registerfondo} className="card-img-top cardRegister bd-placeholder-img text-white" aria-label='Placeholder: Register' alt='international'></img>
                                            <h1 className="position-absolute top-50 start-50 text-white modern ">User register</h1>
                                        </div>
                                        <div class="card-body p-md-5 mx-md-4">

                                            <form onSubmit={submitHandler} >
                                                <div class="row g-0">
                                                    <div className='col-12'>
                                                        <div class="row pt-1">
                                                            <div class="col-md-6 ">
                                                                <div className='form-group mb-4'>
                                                                    <label className="form-label" htmlFor='name_field'>Nombre</label>
                                                                    <input type="name" id="name_field" className="form-control" name='nombre'
                                                                        value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                                                </div>
                                                                <div className='form-group mb-4'>
                                                                    <label className="form-label" htmlFor='email_field'>Email</label>
                                                                    <input type="email" id="email_field" className="form-control" name='email'
                                                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                </div>

                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='form-group mb-4'>
                                                                    <label className="form-label" htmlFor='lastName_field'>Apellido</label>
                                                                    <input type="text" id="lastName_field" className="form-control" name='apellido'
                                                                        value={apellido} onChange={(e) => setApellido(e.target.value)} />
                                                                </div>
                                                                <div className='form-group mb-4'>
                                                                    <label className="form-label" htmlFor='password_field'>Clave</label>
                                                                    <input type="password" id="password_field" className="form-control" name='password'
                                                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='form-group mb-4'>
                                                                    <label className="form-label" htmlFor='genero_field'>Genero</label>
                                                                    <select id='genero_field' className='form-control' name='genero'
                                                                        value={genero} onChange={(e) => setGenero(e.target.value)} >
                                                                        {generos.map(genero => (
                                                                            <option key={genero} value={genero}>{genero} </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="text-center pt-1 mt-3 pb-1">
                                                    <button class=" w-100 btn btn-primary btn-block fa-lg backgroundMega border border-dark mb-3" id='register_button' type="submit">Registrarme </button>
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
