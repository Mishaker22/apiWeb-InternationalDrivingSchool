import React, { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, resetPassword } from '../../actions/user_actions'
import MetaData from '../layout/metadata'

export const ResetPassword = () => {
    const [password, setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const params=useParams();
    const navigate=useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const {error,success}=useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Contraseña reiniciada correctamente')
            navigate('/login')
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);
        dispatch(resetPassword(params.token, formData))
    }
    return (
        <Fragment>
            <MetaData title={'Reset Password'} />
            <div className='backgroundForm p-5'>
                <div className='container container-fluid'>
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div className='card cardTransparent'>
                            <div className='card-header'>
                                <h3 className='text-white cafe'>Change password</h3>
                            </div>
                            <div className='card-body  px-4'>
                                <p class="card-title text-white"><b>Hi!</b> you should check in on some of those fields below</p>
                                <form className="shadow-lg" onSubmit={submitHandler} >
                                    <div className='row g-0'>
                                        <div className='col-12 col-md-12 p-1'>
                                            <div className="form-group mt-2">
                                                <label for="email_field" className='text-white cafe'>Your new password:</label>
                                                <input
                                                    type="password"
                                                    id="password_field"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="email_field" className='text-white cafe'>Repeat password:</label>
                                                <input
                                                    type="password"
                                                    id="confirm_field"
                                                    className="form-control"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-12 '>
                                            <button
                                                type="submit"
                                                className="btn btn-outline-danger text-white mt-4 w-100"
                                                id='confirm_btn'>
                                                Confirm
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
