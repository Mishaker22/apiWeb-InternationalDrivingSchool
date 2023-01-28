import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../actions/user_actions';
import MetaData from '../layout/metadata'

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (message) {
            alert.success(message)
        }
    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (
        <Fragment>
            <Fragment>
                <MetaData title="Forgot password"></MetaData>
                <div className='backgroundForm p-5'>
                    <div className='container container-fluid'>
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div className='card cardTransparent'>
                                <div className='card-header'>
                                    <h3 className='text-white cafe'>Forgot password</h3>
                                </div>
                                <div className='card-body  px-4'>
                                    <p class="card-title text-white">Enter your registered email ID to reset the password</p>
                                    <form className="shadow-lg" onSubmit={submitHandler} >
                                        <div className='row g-0'>
                                            <div className='col-12 col-md-12 p-1'>
                                                <div className="form-group mt-2">
                                                    <label for="email_field" className='text-white cafe'>Registered email:</label>
                                                    <input
                                                        type="email"
                                                        id="email_field"
                                                        className="form-control"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-12 '>
                                                <button
                                                    type="submit"
                                                    className="btn btn-outline-danger text-white mt-4 w-100"
                                                    id='forgot_password_btn'
                                                    disabled={loading ? true : false}>
                                                    Reset Password
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
        </Fragment>
    )
}
