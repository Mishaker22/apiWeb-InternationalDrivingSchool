import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'
import { MDBDataTable } from 'mdbreact'

export const ServiceList = () => {
    const { loading, services, error } = useSelector(state => state.services)
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
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
                }
            ],
            rows: []
        }
        services.forEach(service => {

            data.rows.push({
                nombre: service.nombre,
                descripcion: service.descripcion,
                productos: service.producto.length
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

