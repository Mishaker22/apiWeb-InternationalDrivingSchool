import React, { Fragment, useEffect } from 'react'
import Metadata from '../layout/metadata'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceDetails, clearErrors } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const ServiceDetails = () => {

  const { loading, service, error } = useSelector(state => state.serviceDetails)
  const { user } = useSelector(state => state.auth)

  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getServiceDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors)
    }
  }, [dispatch])

  return (
    <Fragment>
      {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
        <h2 className='quantify text-white'> Loading...</h2>
      </div> : (
        <Fragment>
          <Metadata title={service.nombre}></Metadata>
          <div className='backgroundCall'>
            <div className='container container-fluid'>
              <div className='row'>
                <div className='col-12 col-lg-12'>
                  <div className='row d-flex  justify-content-center align-items-center h-50'>
                    <div className='text-center text-danger quantify mt-4'>
                      <h1><b>Services Details</b></h1>
                    </div>
                    {service.producto && service.producto.map(product => (
                      <div key={product.public_id} className="col-12 col-md-4 " id='detalles_services'>
                        <div className="containerListServices">
                          <div className='cardS flex-column'>
                            <div className='content'>
                              <div className='text'>
                                <h4 className='text-center quantify'>Option {product.public_id} </h4>
                                <p className='text-white text-center'> {product.descripcion_producto} </p>
                                <h5 className='text-white text-center'> <hr></hr>${product.precio} <hr></hr> </h5>
                              </div>
                            </div>
                            <div className='linkServices'>
                              {user ?
                                <Link to={`/preinscription/${id}/${product._id}`} id="button" type='button'
                                  className="btn btn-outline-danger ms-10 text-white cafe"> Book Now
                                  <i class="bi bi-clipboard-check"></i></Link>
                                :
                                <div className="alert alert-danger mt-5" type="alert"> You must log in to pre-register </div>
                              }

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
