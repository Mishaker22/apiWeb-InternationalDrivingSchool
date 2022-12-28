import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/metadata'
import cs_1 from '../../images/cs_1.jpeg'
import cs_2 from '../../images/cs_2.jpeg'
import cs_3 from '../../images/cs_3.jpeg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const Services = () => {
    const { loading, services, error } = useSelector(state => state.services)
    const alert=useAlert();
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
                    <div className='container-fluid'>
                        <div className='row'>
                            <div id='carruselServicios' className='col-12 col-md-7'>
                                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active"  data-bs-interval="5000">
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
                            <div id="contenedorServicios" className='col-12 col-md-5'>
                                <div className='m-2 border border-danger '>
                                    <h1 className='text-white text-center cream m-1 bg-danger'>Services <hr className='text-danger'></hr></h1>
                                    <div class="scroll">
                                        <section id="listaServicios" className="container">
                                            <div id='listaServicios' className="row">
                                                {services && services.map(service => (
                                                    <div key={service._id} className="col-sm-12 col-md-12 ">
                                                        <div className="card p-6 rounded bg-danger m-1">
                                                            <div className="card-body d-flex flex-column justify-content-center align-items-center cardBody text-secondary">
                                                                <h4 id='tloService' className='modern text-white'>{service.nombre}  </h4>
                                                                <p class="p-service"><hr className='text-danger '></hr>{service.descripcion} <hr className='text-danger'></hr> </p>
                                                                <Link to={`/service/${service._id}`} id="button" type='button' className="btn btn-outline-danger w-50 ms-10 text-white cafe"> More Details <i className="bi bi-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
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
