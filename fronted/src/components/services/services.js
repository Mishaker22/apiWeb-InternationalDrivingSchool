import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/metadata'
import cs_1 from '../../images/cs_1.jpeg'
import cs_2 from '../../images/cs_2.jpeg'
import cs_3 from '../../images/cs_3.jpeg'
import car from '../../images/car.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const Services = () => {
    const { loading, services, error } = useSelector(state => state.services)
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getServices());

    }, [dispatch])

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"services"}></MetaData>
                    <div className='container-fluid backgroundGray'>
                        <div className='row colorService border border-3 border-dark'>
                            <div id='carruselServicios' className='col-12 col-md-7 '>
                                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="5000">
                                            <img src={cs_2} class="d-block w-100" alt="..."></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={cs_1} class="d-block w-100" alt="..."></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={cs_3} class="d-block w-100" alt="..."></img>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Anterior</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Siguiente</span>
                                    </button>
                                </div>
                            </div>
                            <div id='messageWelcome' className='col-12 col-md-5 '>
                                <div className='containMessage'>
                                    <h2>Welcome to International Driving School!</h2>
                                    <h4>Building safe drivers</h4>
                                    <p>We are a family business, serving Broward and Miami Dade counties. We specialize in providing the best and guaranteed service,
                                        since we have the best professional instructors, trained, certified and above all patient.
                                        Each of our students will learn all the knowledge and skills to become responsible and safe drivers for life.</p>
                                    <span>Scroll down to see our services. <i class="bi bi-arrow-down"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div id="contenedorServicios" className='col-12 col-md-12'>
                                <div className='row d-flex justify-content-center align-items-center' >
                                    <h1 className='txtServices'>Services</h1>
                                    {services && services.map(service => (
                                        <div key={service._id} className="col-sm-12 col-md-4 ">
                                            <div className='containerServices'>
                                                <div className='cardServices'>
                                                    <div className='lines'></div>
                                                    <div className='imgServices'>
                                                        <img src={car} alt="icono" />
                                                    </div>
                                                    <div className='contentServices'>
                                                        <div className='details'>
                                                            <h2 id='tloService'>{service.nombre}</h2>
                                                            <p>{service.descripcion}</p>
                                                            <Link to={`/service/${service._id}`} id="button" type='button' className="btn btn-outline-danger w-50 ms-10 text-white cafe"> More Details <i className="bi bi-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </Fragment>

            )}

        </Fragment>
    )
}
