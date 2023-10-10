import React, { Fragment } from 'react'
import slideUno from "../images/carrusel1.jpg"
import slideDos from "../images/carrusel2.jpg"
import slideTres from "../images/carrusel3.jpg"
import { Link } from 'react-router-dom';
import MetaData from './layout/metadata';

export const Inicio = () => {
    return (
        <Fragment>
            <MetaData title={"Home"}></MetaData>
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
                <div className='position-relative w-100 '>
                    <div className="info ">
                        <h1 className="quantify">ACADEMIA DE  <br></br> CONDUCCIÓN</h1>
                        <h5 class="cafe">¡Tu viaje comienza aqui!</h5>
                        <hr></hr>
                        <p className='text-start'> Te asesoramos con:</p>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Examen Teórico</p>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Curso de Alcohol y Drogas.</p>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Clases de Manejo.</p>
                        <p className='text-start'><i class="bi bi-caret-right-fill text-danger"></i> Examen de Manejo.</p>

                    </div>
                    <div class='info_botones'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Link className='LinkInfo' to={"/contact_us"}>
                                    <div class="contact">
                                        <h3 className='p-1 cream'><i class="bi bi-headset"></i> Contactanos</h3>
                                        <p className='ms-4 text-start'>Envianos tu consulta y un representante estara encantado de asesorarte</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-12 col-md-6'>
                                <Link to={"/services"} className='LinkInfo'>
                                    <div class="book">
                                        <h3 className='p-1 cream'><i class="bi bi-clipboard2-check"></i>Reserve Ahora</h3>
                                        <p className='ms-4 text-start'>Selecciona el servicio que estas buscando</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
