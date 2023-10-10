import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { clearErrors, newPreinscription } from '../../actions/preinscriptions_actions'
import { CREATE_PREINSCRIPTION_RESET } from '../../constants/preinscription_constant'
import { getProducts } from '../../actions/services_actions'

export const Preinscription = () => {

  const navigate = useNavigate()
  const params = useParams();

  const [id, setId] = useState(0)
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [product, setProducto] = useState({
    id: "",
    public_id: "",
    descripcion: "",
    precio: 0
  })

  const dispatch = useDispatch();
  const alert = useAlert();

  const { user } = useSelector(state => state.auth)
  const { success, loading, error } = useSelector(state => state.newPreinscription) //este viene del store.js
  const { producto, error: errorProduct } = useSelector(state => state.getProducts);

  const productId = params.idProduct
  const serviceId = params.idService

  useEffect(() => {
    if (success) {
      navigate('/admin/listPreinscriptions')
      alert.success('Pre-registration successfully completed')
      dispatch({ type: CREATE_PREINSCRIPTION_RESET })
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors)
    }
    if (serviceId !== '') {
      dispatch(getProducts(serviceId))

    }
  }, [dispatch, success, error, errorProduct, serviceId])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('numeroId', id)
    formData.set('direccion', direccion)
    formData.set('telefono', telefono)
    formData.set('service', serviceId)
    formData.set('producto', productId)

    dispatch(newPreinscription(formData))
  }
  return (
    <Fragment>
      {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
        <h2 className='quantify text-white'> Loading...</h2>
      </div> : (
        <Fragment>
          <MetaData title={"Pre-register"}></MetaData>
          <div className='backgroundPre'>
            <div className="row d-flex justify-content-center">
              <div className='col-6 mt-4'>
                <h1 className='quantify text-danger text-center my-5'>Pre-registration</h1>
                <div className="card rounded-3 m-1 text-black fondoFormu mb-5">
                  <div class="card-body p-4  text-white">
                    <div className="row d-flex justify-content-center">
                      <div className='col-12 col-md-6 '>
                        <h4 className='cafe text-center'>Information</h4>
                        <div className='d-flex justify-content-center flex-column'>
                          <hr class="mt-0 mb-4"></hr>
                          {user ?
                            <Fragment>
                              <h5 className='text-success'>Hi {user.nombre} {user.apellido}!</h5>
                            </Fragment> : <Fragment>
                              <h5> Hi !</h5></Fragment>
                          }
                          <hr></hr>
                          {producto && producto.map(p => (
                            (p._id === productId ?
                              <Fragment>
                                <p className='text-white text-start'>Product id: {p._id} </p>
                                <p className='text-start cafe'>Option #{p.public_id} </p>
                                <p className='text-white text-justify'>Details: {p.descripcion_producto} </p>
                                <h5 className='text-white text-center'> Price: {p.precio}</h5>
                              </Fragment> :
                              <h5 className='text-white text-center'>  </h5>
                            )

                          ))}

                        </div>
                      </div>
                      <div className='col-12 col-md-6 '>
                        <form onSubmit={submitHandler} >
                          <h4 className='cafe'>Send information</h4>
                          <hr class="mt-0 mb-4"></hr>
                          <div className='form-group mb-4'>
                            <label className="form-label" htmlFor='id_field'>Id Number</label>
                            <input type="numeric" id="id_field" className="form-control" name='id'
                              value={id} onChange={(e) => setId(e.target.value)}
                            />
                          </div>
                          <div className='form-group mb-4'>
                            <label className="form-label" htmlFor='direccion_field'>Address</label>
                            <input type="text" id="direccion_field" className="form-control" name='direccion'
                              value={direccion} onChange={(e) => setDireccion(e.target.value)}
                            />
                          </div>
                          <div className='form-group mb-4'>
                            <label className="form-label" htmlFor='telefono_field'>Phone Number</label>
                            <input type="text" id="telefono_field" className="form-control" name='telefono'
                              value={telefono} onChange={(e) => setTelefono(e.target.value)}
                            />
                          </div>

                          <hr></hr>
                          <button type="submit" className="btn btn-outline-danger w-100 "
                            disabled={loading ? true : false} >Send</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Fragment>
      )
      }
    </Fragment >
  )
}
