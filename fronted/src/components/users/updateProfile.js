import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import { useNavigate } from "react-router-dom"
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, loadUser, updateProfile } from '../../actions/user_actions'
import { PROFILE_UPDATE_RESET } from '../../constants/user_constant'

export const UpdateProfile = () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [genero, setGenero] = useState("")
    const alert = useAlert();
    const dispatch = useDispatch();

    const generos = [
        "Otro",
        "Femenino",
        "Masculino",
    ]

    const { user } = useSelector(state => state.auth)
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {
        if (user) {
            setNombre(user.nombre);
            setApellido(user.apellido);
            setGenero(user.genero)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success("Perfil actualizado correctamente")
            dispatch(loadUser());

            navigate("/MyProfile")

            dispatch({
                type: PROFILE_UPDATE_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("nombre", nombre);
        formData.set("apellido", apellido);
        formData.set("genero", genero)

        dispatch(updateProfile(formData))
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
                                <div class="col col-lg-8 mb-4 mb-lg-0">
                                    <div class="card mb-3 rounded-3" >
                                        <form onSubmit={submitHandler}>
                                            <div class="row g-0">
                                                <div class="col-md-4 backgroundMega text-center text-white">
                                                    <h3 className='m-4'>AVATAR</h3>
                                                </div>
                                                <div class="col-md-6">
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
                                                            <label className="form-label" htmlFor='genero_field'>Genero</label>
                                                            <select id='genero_field' className='form-control' name='genero'
                                                                value={genero} onChange={(e) => setGenero(e.target.value)} >
                                                                {generos.map(genero => (
                                                                    <option key={genero} value={genero}>{genero} </option>
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
