import React, { Fragment } from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <footer className='border-top border-ligth'>
                <div class="footer_top">
                    <div class="contact_info">
                        <div className='row w-100'>
                            <div className='col-12 col-md-3'>
                                <h2 className="quantify text-center p-1"> Contact Details</h2>
                            </div>
                            <div className='col-12 col-md-4'>
                                <span className='text-white'><b>Email</b><br></br></span>
                                <a className='text-white'>
                                    <span className="align-middle vertical-alignment"><i class="bi bi-envelope-at"></i> InternationalDrivingAcademy@gmail.com   </span>
                                </a>
                            </div>
                            <div className='col-12 col-md-2'>
                                <span className='text-white'><b>Mobile number</b><br></br></span>
                                <a className='text-white'>
                                    <span className="align-middle vertical-alignment"><i class="bi bi-telephone"></i>  305 - 491 - 2288</span>
                                </a>
                            </div>
                            <div className='col-12 col-md-3'>
                                <span className='text-white'><b>Follow us</b><br></br></span>
                                <span className="align-middle vertical-alignment text-white"><i class="bi bi-facebook"></i> <a href="https://www.instagram.com/internationaldschoolmiami/"><i class="bi bi-instagram"></i></a> @Internationaldschoolmiami</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-1 border-2  footer'>
                <span class="cafe"><i class="bi bi-c-circle"></i> Copyright 2022 - International Driving academy - Designed by</span>
                        <a href='https://github.com/Mishaker22' className='text-danger'> Mishaker</a>
                </div>
            </footer>
        </Fragment>
    )
}
