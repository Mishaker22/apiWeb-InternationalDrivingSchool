import React, { Fragment } from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <footer className='py-2 bg-dark text-white border-2 border-top border-ligth footer'>
                <div className='row w-100'>
                    <div className='col-12 col-md-1'></div>
                    <div className='col-12 col-md-3'>
                        <span><i class="bi bi-c-circle"></i>Copyright 2022 <br></br> International Driving academy</span>
                        <p className='text-danger'>Designed by Mishaker</p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <span><b>Contact us</b><br></br></span>
                        <a className='text-white'>
                            <span className="align-middle vertical-alignment"><i class="bi bi-envelope-at"></i> InternationalDrivingAcademy@gmail.com <br></br></span>
                        </a>
                        <a className='text-white'>
                            <span className="align-middle vertical-alignment"><i class="bi bi-telephone"></i> 305 - 491 - 2288</span>
                        </a>
                    </div>
                    <div className='col-12 col-md-4'>
                        <span><b>Follow us</b><br></br></span>
                        <span className="align-middle vertical-alignment text-white"><i class="bi bi-facebook"></i> <a href="https://www.instagram.com/internationaldschoolmiami/"><i class="bi bi-instagram"></i></a> @Internationaldschoolmiami</span>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
