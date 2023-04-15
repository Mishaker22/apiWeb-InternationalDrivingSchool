import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { clearErrors, deleteProduct, getProducts, getServiceDetails, updateService } from '../../actions/services_actions'
import { DELETE_SUBCATEGORIE_RESET, UPDATE_SERVICE_RESET } from '../../constants/services_constant'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'
import { MDBDataTable } from 'mdbreact'

export const UpdateService = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const alert = useAlert();
    const dispatch = useDispatch();

    const { producto, error: getProductsError } = useSelector(state => state.getProducts);
    const { error, service } = useSelector(state => state.serviceDetails)
    const { success, isDeleted, isUpdated, loading, error: updateError, deleteError } = useSelector(state => state.service)
    const serviceId = params.id

    useEffect(() => {

        if (success) {
            navigate("/admin/dashboard");
            alert.success('Update service Successfully')
            dispatch({ type: UPDATE_SERVICE_RESET })
        }

        if (service && service._id !== serviceId) {
            dispatch(getServiceDetails(serviceId));
        } else {
            setNombre(service.nombre)
            setDescripcion(service.descripcion)
        }

        if (getProductsError) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (serviceId !== '') {
            dispatch(getProducts(serviceId))
        }

        if (isUpdated) {
            navigate("admin/listServices");
            alert.success('Update service Successfully')
            dispatch({ type: UPDATE_SERVICE_RESET })
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }

        if (updateError) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Producto Eliminado correctamente');
            dispatch({ type: DELETE_SUBCATEGORIE_RESET })
        }

    }, [dispatch, success, isDeleted, isUpdated, getProductsError, alert, error, updateError, deleteError, service, serviceId])

    const deleteProductHandler = (idProduct) => {
        
        const response = window.confirm("Estas seguro de querer eliminar este producto?")
        if (response) {
            dispatch(deleteProduct(serviceId, idProduct))
            window.location.reload(false)
            alert.success("Servicio eliminado correctamente")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre)
        formData.set('descripcion', descripcion)

        dispatch(updateService(service._id, formData))
    }
    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Public Id',
                    field: 'public_id',
                    sort: 'asc'
                },
                {
                    label: 'Descripcion',
                    field: 'descripcion_producto',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }

        producto.forEach(p => {
            data.rows.push({
                public_id: p.public_id,
                descripcion_producto: p.descripcion_producto,
                precio: p.precio,
                acciones:
                    <Fragment>
                        <Link to={`/admin/updateProduct/${p._id}`} className="btn btn-info py-1 px-1">
                            <i class="bi bi-pen"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-1" onClick={() => deleteProductHandler(p._id)}>
                            <i class="bi bi-trash3"></i>
                        </button>
                    </Fragment>
            })
        })

        return data;
    }


    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"Update Service"}></MetaData>
                    <div className='backgroundFormus'>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <Sidebar></Sidebar>
                                </div>
                                <div className='col-12 col-md-5'>
                                    <Fragment>
                                        <form className='shadow-lg text-white' onSubmit={submitHandler}>
                                            <h1 className='quantify text-center text-white'>Actualizar Servicio</h1>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='name_field'>Nombre del Paquete</label>
                                                <input type="text" id="name_field" className="form-control"
                                                    value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                            </div>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='description_field'>Descripcion del paquete</label>
                                                <textarea rows={"8"} id="description_field" className="form-control"
                                                    value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                            </div>
                                            <Link to={`/admin/createSubcategorie/${serviceId}`}>
                                                <button id="btnAgregar"
                                                    className="btn btn-outline-success text-white my-3 w-50"
                                                >Añadir Subcategoria
                                                </button>
                                            </Link>
                                            <button id="btnUpdate"
                                                className="btn btn-outline-danger text-white my-3 w-50"
                                                type="submit"
                                            >Guardar Cambios
                                            </button>
                                        </form>
                                    </Fragment>
                                </div>
                                <div className='col-12 col-md-5'>
                                    <Fragment>
                                        <h1 className='quantify text-white text-center'> Subcategorias</h1>
                                        {producto && producto.length > 0 ? (
                                            <MDBDataTable
                                                data={setProducts()} className="px-3 bordered striped hover text-white border border-danger m-2 p-2">
                                            </MDBDataTable>
                                        ) : (
                                            <p className="mt-5 text-center"></p>
                                        )}
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
