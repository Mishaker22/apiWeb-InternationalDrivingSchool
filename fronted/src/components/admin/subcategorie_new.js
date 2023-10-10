import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'
import { useAlert } from 'react-alert'
import { clearErrors, newProduct } from '../../actions/services_actions'
import { NEW_PRODUCT_SUBCATEGORIE_RESET } from '../../constants/services_constant'

export const Subcategorie_new = () => {
    const {success, error, loading}=useSelector(state => state.newProduct)

    const params = useParams();
    const navigate=useNavigate();
    const [id, setId] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio]=useState(0)
    const serviceId=params.id

    const alert=useAlert();
    const dispatch=useDispatch();

    useEffect(()=>{
        if (success) {
            alert.success("Subcategoria Añadida al paquete")
            dispatch({type: NEW_PRODUCT_SUBCATEGORIE_RESET})
            navigate("/admin/dashboard");
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        } 
    },[dispatch, success, alert, error, serviceId])

    function setPublicId()
    {

    }
    const submitHandler=(e)=>{
        e.preventDefault();
    
        const formData=new FormData();
        formData.set('public_id', id)
        formData.set('descripcion_producto', descripcion)
        formData.set('precio',precio)
        formData.set('idServicio',serviceId)
    
        dispatch(newProduct(formData))
      }
    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"New Service"}></MetaData>
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
                                                    <label className="form-label" htmlFor='id_field'>Public ID</label>
                                                    <input type="text" id="id_field" className="form-control" name='id'
                                                        value={id} onChange={(e) => setId(e.target.value)} />
                                                </div>

                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='description_field'>Descripcion del servicio</label>
                                                    <textarea rows={"8"} id="description_field" className="form-control" name='descripcion'
                                                        value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                                </div>

                                                <div className='form-group mb-4'>
                                                    <label className="form-label" htmlFor='precio_field'>Precio</label>
                                                    <input type="text" id="precio_field" className="form-control" name='Precio'
                                                        value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                                </div>
                                                <button id="btnAgregar"
                                                    className="btn w-100 my-2 text-white bg-danger"
                                                    type="submit"
                                                >Insertar Servicio
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
