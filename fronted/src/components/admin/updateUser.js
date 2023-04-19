import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MetaData from '../layout/metadata';
import { USER_UPDATE_RESET } from '../../constants/user_constant';
import { clearErrors, getUserDetails, updateUser } from '../../actions/user_actions';

export const UpdateUser = () => {
    const navigate = useNavigate();
    const params= useParams();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("");
    const [genero, setGenero] = useState("")
    const [role, setRole] = useState("")
    const [avatarPreview, setAvatarPreview] = useState("")
    const [fecha, setFecha] = useState("")

    const userId=params.id;


    const alert = useAlert();
    const dispatch = useDispatch();

    const generos = [
        "Otro",
        "Femenino",
        "Masculino",
    ]

    const roles=[
        "user",
        "admin",
        "employee"
    ]

    const { user, error } = useSelector(state => state.userDetails)
    const { isUpdated, error: updateError, loading } = useSelector(state => state.user);

    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        }else{
            setNombre(user.nombre);
            setApellido(user.apellido);
            setEmail(user.email);
            setGenero(user.genero);
            setRole(user.role);
            setAvatarPreview(user.avatar.url);
            setFecha(user.fechaRegistro)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (updateError) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success("Usuario actualizado correctamente")
            navigate("/admin/listUsers")

            dispatch({
                type: USER_UPDATE_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, userId, user])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('apellido', apellido);
        formData.set('email', email);
        formData.set('genero', genero)
        formData.set('role', role);

        dispatch(updateUser(user._id, formData))
    }

  return (
    <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title="Update Profile"></MetaData>
                    <div className='backgroundProfile pt-5'>
                        <div className='container container-fluid'>
                            <div className='row d-flex justify-content-center align-items-center  '>
                                <div class="col col-lg-9 mb-4 mb-lg-0">
                                    <div class="card mb-3 rounded-3" >
                                        <form onSubmit={submitHandler}>
                                            <div class="row g-0">
                                                <div class="col-md-5 colorProfileCard text-center text-white">
                                                    <div className=' row d-flex justify-content-center align-items-center mt-5 mb-5'>
                                                        <h2 className='cafe text-white my-4'>Avatar</h2>
                                                        <div className='boxColorUpdateProfile'>
                                                            <div className='containtUpdateProfile mb-5'>
                                                                <b></b>
                                                                {user ? (
                                                                    <img className="" src={avatarPreview} alt={user && user.nombre} />
                                                                ) : !loading}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="card-body p-4">
                                                        <h3 className='cafe'><b>Update Profile</b></h3>
                                                        <hr class="mt-0 mb-4"></hr>
                                                        <div className='form-group mb-4'>
                                                            <label className="form-label" htmlFor='name_field'>Nombre</label>
                                                            <input type="name" id="name_field" className="form-control" name='nombre'
                                                                value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                                        </div>
                                                        <div className='form-group mb-4'>
                                                            <label className="form-label" htmlFor='lastName_field'>Apellido</label>
                                                            <input type="text" id="lastName_field" className="form-control" name='apellido'
                                                                value={apellido} onChange={(e) => setApellido(e.target.value)} />
                                                        </div>
                                                        <div className='form-group mb-4'>
                                                            <label className="form-label" htmlFor='email_field'>Email</label>
                                                            <input type="text" id="email_field" className="form-control" name='email'
                                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                        <div className='form-group mb-4'>
                                                            <label className="form-label" htmlFor='genero_field'>Genero</label>
                                                            <select id='genero_field' className='form-control' name='genero'
                                                                value={genero} onChange={(e) => setGenero(e.target.value)} >
                                                                {generos.map(genero => (
                                                                    <option key={genero} value={genero}>{genero} </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className='form-group mb-4'>
                                                            <label className="form-label" htmlFor='role_field'>Role</label>
                                                            <select id='role_field' className='form-control' name='role'
                                                                value={role} onChange={(e) => setRole(e.target.value)} >
                                                                {roles.map(role => (
                                                                    <option key={role} value={role}>{role} </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        
                                                        <hr></hr>
                                                        <button type="submit" className="btn btn-outline-danger "
                                                            disabled={loading ? true : false} >Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

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
