import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, updatePassword } from '../../actions/user_actions'
import { PASSWORD_UPDATE_RESET } from '../../constants/user_constant'

export const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success("Contraseña Actualizada Correctamente")
            navigate("/MyProfile")

            dispatch({
                type: PASSWORD_UPDATE_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("oldPassword", oldPassword);
        formData.set("newPassword", newPassword);
        formData.set("confirmPassword", confirmPassword);

        dispatch(updatePassword(formData))
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title="UpdatePassword"></MetaData>
                    <div className='backgroundForm p-5'>
                        <div className='container container-fluid'>
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div className='card cardTransparent'>
                                    <div className='card-header'>
                                        <h3 className='text-white cafe'>Update password</h3>
                                    </div>
                                    <div className='card-body'>
                                        <form className="shadow-lg" onSubmit={submitHandler} >
                                            <div className='row g-0'>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-10 p-1'>
                                                    <div className="form-group">
                                                        <label for="old_password_field" className='text-white cafe'>Contraseña Anterior:</label>
                                                        <input
                                                            type="password"
                                                            id="old_password_field"
                                                            className="form-control"
                                                            value={oldPassword}
                                                            onChange={(e) => setOldPassword(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-10 p-1'>
                                                    <div className="form-group">
                                                        <label for="new_password_field" className='text-white cafe'>Nueva Contraseña</label>
                                                        <input
                                                            type="password"
                                                            id="new_password_field"
                                                            className="form-control"
                                                            value={newPassword}
                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-10 p-1'>
                                                    <div className="form-group">
                                                        <label for="confirm_password_field" className='text-white cafe'>Confirmar nueva Contraseña</label>
                                                        <input
                                                            type="password"
                                                            id="confirm_password_field"
                                                            className="form-control"
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-1'></div>
                                                <div className='col-12 col-md-10 p-1'>
                                                    <button type="submit" className="btn btn-outline-danger text-white"
                                                        disabled={loading ? true : false} >Save changes</button>
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
