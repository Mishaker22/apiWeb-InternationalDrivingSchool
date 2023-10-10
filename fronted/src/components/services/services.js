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
                    <div className='container-fluid fondoNosotros'>
                        <div className='row'>
                            <div id="contenedorServicios" className='col-12 col-md-12'>
                                <div className='row d-flex justify-content-center align-items-center' >
                                    <h1 className='txtServices mb-5'>Services</h1>
                                    {services && services.map(service => (
                                        <div key={service._id} className="col-sm-12 col-md-4 ">
                                            <div className='containerServices '>
                                                <div className='cardServices'>
                                                    <div className='lines'></div>
                                                    <div className='d-flex justify-content-center align-items-center imgServices '>
                                                        <b><h2 id='tloService' className='text-center'>{service.nombre}</h2></b>
                                                    </div>
                                                    <div className='contentServices'>
                                                        <div className='details position-relative'>
                                                            <p><b className='cafe text-white'>{service.descripcion}</b></p>
                                                            <div id='botonAlBorde' className='botonAlBorde'>
                                                                <Link to={`/service/${service._id}`} id="button" type='button' className="btn btn-outline-danger w-50 ms-10 text-white cafe float-bot"> <b>More Details </b><i className="bi bi-arrow-right"></i></Link>
                                                            </div>
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
