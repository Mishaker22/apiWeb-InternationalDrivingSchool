import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/metadata'
import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, deleteService, getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const ServiceList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, services, error } = useSelector(state => state.services)

    const deleteProductHandler = (id) => {
        const response = window.confirm("Estas seguro de querer eliminar este producto?")
        if (response) {
            dispatch(deleteService(id))
            window.location.reload(false)
            alert.success("Servicio eliminado correctamente")
        }
    }

    useEffect(() => {
        if (error) {
            return alert.error(error)
            dispatch(clearErrors)
        }
        dispatch(getServices());

    }, [dispatch])

    const setServices = () => {
        const data = {
            columns: [
                {
                    label: "Nombre",
                    field: "nombre",
                    sort: "asc"
                },
                {
                    label: "Descripcion",
                    field: "descripcion",
                    sort: "asc"
                },
                {
                    label: " Productos",
                    field: "productos"
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }
        services.forEach(service => {

            data.rows.push({
                nombre: service.nombre,
                descripcion: service.descripcion,
                productos: service.producto.length,
                acciones: <Fragment>
                    <Link to={`/service/${service._id}`} className="btn btn-primary py-1 px-2">
                        <i class="bi bi-eye"></i>
                    </Link>
                    <Link to={`/admin/updateService/${service._id}`} className="btn btn-info py-1 px-2">
                        <i class="bi bi-pen"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ms-1" onClick={()=>deleteProductHandler(service._id)}>
                        <i class="bi bi-trash3"></i>
                    </button>
                </Fragment>
            })
        })

        return data;

    }
    return (
        <Fragment>
            <MetaData title={"all services"}></MetaData>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-12 col-md-10'>
                        <Fragment>
                            <h1 className='my-5 quantify text-danger'> Servicios Registrados</h1>
                            {loading ?
                                <div className='d-flex justify-content-center align-items-center m-5'>
                                    <h2 className='quantify text-white'> Loading...</h2>
                                </div> : (
                                    <MDBDataTable
                                        data={setServices()} className="px-3 bordered striped hover text-white border border-danger m-2 p-2">

                                    </MDBDataTable>
                                )}
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

