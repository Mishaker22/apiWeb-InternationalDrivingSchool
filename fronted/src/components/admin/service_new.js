import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_SERVICE_RESET} from '../../constants/services_constant'
import { clearErrors, newService } from '../../actions/services_actions'
import { useNavigate } from 'react-router-dom'


export const NewService = () => {
  const {success, loading, error} = useSelector(state => state.newService) //este viene del store.js

  const navigate=useNavigate()
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")

  const alert = useAlert();
  const dispatch = useDispatch();


  useEffect(() => {
    if (success) {
      navigate("/admin/dashboard");
      alert.success('Service creates Successfully')
      dispatch({type: CREATE_SERVICE_RESET})
    }
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
  }, [dispatch, success , alert, error])

  const submitHandler=(e)=>{
    e.preventDefault();

    const formData=new FormData();
    formData.set('nombre', nombre)
    formData.set('descripcion', descripcion)

    dispatch(newService(formData))
  }

  return (
    <Fragment>
      {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
        <h2 className='quantify text-white'> Loading...</h2>
      </div> : (
        <Fragment>
          <MetaData title={"New Package"}></MetaData>
          <div className='backgroundFormus'>
            <div className=' container container-fluid'>
              <div className="row">
                <div className="col-12 col-md-2">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className='col-12 col-md-6'>
                  <div className='d-flex justify-content-center align-items-center mt-4 text-white'>
                    <Fragment>
                      <form className="shadow-lg" onSubmit={submitHandler} >
                        <h1 className='quantify text-center'>Nuevo Categoria Servicio</h1>

                        <div className='form-group mb-4'>
                          <label className="form-label" htmlFor='name_field'>Nombre de la categoria</label>
                          <input type="text" id="name_field" className="form-control" name='nombre'
                            value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>

                        <div className='form-group mb-4'>
                          <label className="form-label" htmlFor='description_field'>Descripcion de la categoria</label>
                          <textarea rows={"8"} id="description_field" className="form-control" name='descripcion'
                            value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </div>
                        <button id="btnAgregar"
                          className="btn w-100 my-2 text-white bg-danger"
                          type="submit" 
                          >Insertar Categoria
                        </button>
                      </form>
                    </Fragment>
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
