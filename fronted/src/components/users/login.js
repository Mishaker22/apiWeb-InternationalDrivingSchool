import React, { Fragment } from 'react'
import MetaData from '../layout/metadata'
import { Link } from 'react-router-dom'
import logo from '../../images/logo_final.png'

export const Login = () => {
    return (
        <Fragment>
            <MetaData title="Login"></MetaData>
            <div className='container container-fluid'>
                <div className="row d-flex justify-content-center">
                    <div class="col-12">
                        <div className="card rounded-3 m-1 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">
                                    <h4 class="mb-4">Please login to your account</h4>
                                        <form>
                                            <div className="form-group mb-4">
                                                <label className="form-label"  htmlFor='email_field'>Username</label>
                                                <input type="email" id="email_field" className="form-control" placeholder="email address" />
                                            </div>

                                            <div class="form-group mb-4">
                                                <label className="form-label" htmlFor='password_field'>Password</label>
                                                <input type="password" id="password_field" className="form-control" />
                                            </div>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button class=" w-100 btn btn-primary btn-block fa-lg backgroundMega border border-dark mb-3" id='login_button' type="submit">Log in </button>
                                                <Link class="text-muted" to="password/forgot">Forgot password?</Link>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger ">
                                                    <Link to={"/register"} className="text-dark"> Create new </Link> </button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center backgroundMega">
                                    <div class="text-dark px-3 py-4 p-md-5 mx-md-4">
                                    <div class="text-center">
                                            <img className='img-fluid' src={logo} alt="International Academy"></img>
                                            <h4 class="mt-1 mb-5 pb-1">Building safe drivers</h4>
                                        </div>
                                        
                                        <p class="small mb-0">International driving academy. Serving broward and miami dade counties,
                                            We have the best professional trained and certificates
                                            intructors whom bring you an excellent guaranteed service. Each of our students will learn all the knowledge and skills
                                            to become responsible and safe drivers for life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

