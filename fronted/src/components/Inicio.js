import React, { Fragment } from 'react'
import slideUno from "../images/carrusel1.jpg"
import slideDos from "../images/carrusel2.jpg"
import slideTres from "../images/carrusel3.jpg"
import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <Fragment>
            <div class="home">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src={slideUno} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slideDos} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slideTres} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='position-absolute w-100'>
                    <div class="info">
                        <h1 className="quantify">INTERNATIONAL <br></br> DRIVING ACADEMY</h1>
                        <h5 class="cafe">We Prepared you for Written and Driving test.</h5>
                        <hr></hr>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Cars available for road test.</p>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Pick-up and drop-off.</p>
                    </div>
                    <div class='info_botones'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div class="contact">
                                    <h3 className='p-1 cream'><i class="bi bi-headset"></i> We contact you</h3>
                                    <p className='ms-4 text-start'>We provide the information you need</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div class="book">
                                    <h3 className='p-1 cream'><i class="bi bi-clipboard2-check"></i> Book Now</h3>
                                    <p className='ms-4 text-start'>Choose the class that suits your needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
