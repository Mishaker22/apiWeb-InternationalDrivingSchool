import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MetaData from '../layout/metadata'

export const Profile = () => {
    const { user, loading } = useSelector(state => state.auth)
    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title="Profile"></MetaData>
                    <div className='backgroundProfile'>
                        <div className='container container-fluid pt-3 '>
                            <h2 className='quantify text-white text-center '>PROFILE</h2>
                            <div className='row d-flex justify-content-center align-items-center mt-5 '>
                                <div class="col-9 ,mb-5 ">
                                    <div class="card rounded-3" >
                                        <div class="row g-0">
                                            <div class="col-md-4 colorProfileCard text-center text-white">
                                                <div className=' row d-flex justify-content-center align-items-center'>
                                                    <div className='boxColorProfileCard mt-4'>
                                                        <div className='contentProfile'>
                                                            {user ? (
                                                                <img className="" src={user.avatar && user.avatar.url} alt={user && user.nombre} />
                                                            ) : !loading}
                                                        </div>
                                                    </div>
                                                    
                                                    <span className='mt-3'><h4 className='modern'>{user.nombre}</h4></span>
                                                    <span><h4 className='modern'> {user.apellido}</h4> </span>
                                                    <span>
                                                        <Link to={"/MyProfile/update"} id="edit_profile" className='btn btn-danger btn-block my-4 cafe' > EDIT PROFILE</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body p-4 mx-4">
                                                    <h3 className='cafe mt-4'><b>Information</b></h3>
                                                    <hr class="mt-0 mb-4"></hr>
                                                    <div class="row pt-1">
                                                        <div class="col-8 mb-3">
                                                            <h5 className='cafe'> <b>Email:</b> </h5>
                                                            <p>{user.email} </p>
                                                            <h5 className='cafe'> <b>Gender:</b> </h5>
                                                            <p>{user.genero} </p>
                                                        </div>
                                                        <div class="col-4 mb-3">
                                                            <h5 className='cafe'> <b>Registered:</b> </h5>
                                                            <p>{String(user.fechaRegistro).substring(0, 10)} </p>

                                                            {user.role !== 'admin' && (
                                                                <Link to={"/preinscription/me"} className="btn btn-dark btn-block mt-2 cafe "> My pre-registrations </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <div class="row pt-1">
                                                        <div class="col-12 mb-3  text-center">
                                                            <Link to="/MyProfile/updatePassword" className="btn btn-danger btn-block mt-3 ">
                                                                Change password
                                                            </Link>
                                                        </div>
                                                    </div>
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
