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
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("https://us.123rf.com/450wm/papagraph/papagraph1708/papagraph170800286/84375900-icono-del-perfil-de-avatar.jpg?ver=6");

    const generos = [
        "Otro",
        "Femenino",
        "Masculino",
    ]

    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.login)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
            alert.success("User create successfully")
        }
        if (error) {
            dispatch(clearErrors)
            alert.error(error)
        }
    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('apellido', apellido);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('genero', genero);
        formData.set('avatar', avatar)

        dispatch(register(formData))
    }
    const onChange = e => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
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
                                                            <div className='col-md-12'>
                                                                <div className='form-group'>
                                                                    <label htmlFor='avatar_upload'>Avatar</label>
                                                                    <div className='d-flex align-items-center'>
                                                                        <div className='col-md-2'>
                                                                            <figure className='avatar me-3 item-rtl'>
                                                                                <img
                                                                                    src={avatarPreview}
                                                                                    className="rounded-circle"
                                                                                    alt="Vista Previa del Avatar"></img>
                                                                            </figure>
                                                                        </div>
                                                                        <div className='col-md-10'>
                                                                            <div className='input-group'>
                                                                                <input
                                                                                    type='file'
                                                                                    name='avatar'
                                                                                    className='form-control'
                                                                                    id='customFile'
                                                                                    accept="images/*"
                                                                                    aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                                                                    onChange={onChange}
                                                                                />
                                                                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
