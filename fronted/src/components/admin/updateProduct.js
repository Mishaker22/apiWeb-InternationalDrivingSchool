import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams, } from 'react-router-dom'
import Sidebar from './sidebar';
import MetaData from '../layout/metadata';
import { clearErrors, getProducts, updateProduct } from '../../actions/services_actions';
import { UPDATE_SUBCATEGORIE_RESET } from '../../constants/services_constant';

export const UpdateProduct = () => {

    const navigate = useNavigate();
    const [param] = useSearchParams();

    const [public_id, setPublic_id] = useState("")
    const [descripcion_producto, setDescripcion_Producto] = useState("")
    const [precio, setPrecio] = useState(0);


    const alert = useAlert();
    const dispatch = useDispatch();

    const { producto, error } = useSelector(state => state.getProducts);
    const { success, loading, isUpdated, error: updateError } = useSelector(state => state.service)

    const serviceId = param.get('idServicio')
    const idProduct = param.get('idProduct')

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }

        if (serviceId !== '') {
            dispatch(getProducts(serviceId))
            producto.forEach(p => {
                if (p._id === idProduct) {
                    setPublic_id(p.public_id)
                    setDescripcion_Producto(p.descripcion_producto)
                    setPrecio(p.precio)
                }
            });
        }
        if (success) {
            navigate("/admin/listServices");
            alert.success('Update service Successfully')
            dispatch({ type: UPDATE_SUBCATEGORIE_RESET })
        }

        if (updateError) {
            alert.error(updateError)
            dispatch(clearErrors)
        }
        if (isUpdated) {
            navigate("/admin/listServices");
            alert.success('Update service Successfully')
            dispatch({ type: UPDATE_SUBCATEGORIE_RESET })
        }

    }, [dispatch, success, isUpdated, alert, error, updateError, serviceId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('public_id', public_id)
        formData.set('descripcion_producto', descripcion_producto)
        formData.set('precio', precio)
        formData.set('idServicio', serviceId)

        dispatch(updateProduct(serviceId, idProduct, formData))
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"Update Product"}></MetaData>
                    <div className='backgroundFormus'>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <Sidebar></Sidebar>
                                </div>
                                <div className='col-12 col-md-2'></div>
                                <div className='col-12 col-md-5'>
                                    <Fragment>
                                        <form className='shadow-lg text-white' onSubmit={submitHandler} >
                                            <h1 className='quantify text-center text-white'>Actualizar Producto</h1>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='id_field'>Public Id</label>
                                                <input type="text" id="id_field" className="form-control"
                                                    value={public_id} onChange={(e) => setPublic_id(e.target.value)} />
                                            </div>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='description_field'>Descripcion</label>
                                                <textarea rows={"8"} id="description_field" className="form-control"
                                                    value={descripcion_producto} onChange={(e) => setDescripcion_Producto(e.target.value)} />
                                            </div>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='id_field'> Precio</label>
                                                <input type="text" id="precio_field" className="form-control"
                                                    value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                            </div>

                                            <button id="btnActualizar"
                                                className="btn btn-outline-danger text-white my-3 w-50"
                                                type="submit"
                                            >Guardar Cambios
                                            </button>
                                        </form>
                                    </Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}
