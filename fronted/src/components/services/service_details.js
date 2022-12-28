import React, { Fragment, useEffect } from 'react'
import Metadata from '../layout/metadata'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceDetails, clearErrors } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const ServiceDetails = () => {

  const { loading, service, error } = useSelector(state => state.serviceDetails)
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
          <div className='container container-fluid'>
            <div className='d-flex  justify-content-center align-items-center'>
              <div className='border border-danger w-50 mt-5 mb-5'>
                <h1 className='text-danger text-center quantify'><b>Services Details</b></h1>
              </div>
            </div>
            <div className='d-flex  justify-content-center align-items-center h-50'>
              <div className='border border-danger w-75 mt-1 mb-5  p-2'>
                <div className='container'>
                  <div className='scroll row d-flex  justify-content-center align-items-center'>
                    {service.producto && service.producto.map(product => (
                      <div key={product.public_id} className="col-12 col-md-4 h-100" id='detalles_services'>
                        <div className="card rounded bg-danger m-1 h-100 ">
                          <h2 className='text-white modern card-header text-center'>Servicio # {product.public_id} </h2>
                          <div className="card-body cardBody d-flex flex-column justify-content-center align-items-center">
                            <p className='text-secondary cafe' > {product.descripcion_producto} </p>
                            <h5 className='text-white'> <hr></hr>${product.precio} <hr></hr> </h5>
                            <Link to={`/preinscription`} id="button" type='button' className="btn btn-outline-danger w-50 ms-10 text-white cafe"> Book Now <i class="bi bi-clipboard-check"></i></Link>
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
