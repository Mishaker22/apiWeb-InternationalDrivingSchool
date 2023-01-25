import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/metadata'
import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'
import { getPreinscriptions } from '../../actions/preinscriptions_actions'
import { useAlert } from 'react-alert'


export const PreinscriptionList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, preinscriptions, error } = useSelector(state => state.preinscriptions)

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getPreinscriptions());

    }, [dispatch, alert, error])

    const setPreinscriptions = () => {
        const data = {
            columns: [
                {
                    label: "Num Id Cliente",
                    field: "numeroId",
                    sort: "asc"
                },
                {
                    label: "Id Orden",
                    field: "id",
                    sort: "asc"
                },
                {
                    label: "Id Servicio",
                    field: "service",
                },
                {
                    label: "Precio",
                    field: "precio",
                },
                {
                    label: "Estado",
                    field: "estado",
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }

        preinscriptions.forEach(order => {

            var id_producto;
            var precio_producto;
            order.service.forEach(s => {
                precio_producto = s.precio
                id_producto = s._id
            })

            data.rows.push({
                numeroId: order.numeroId,
                id: order._id,
                service: id_producto,
                precio: precio_producto,
                estado: order.estado,
                acciones: <Fragment>
                    <Link to={`/preinscription/${order._id}`} className="btn btn-primary  ">
                        <i class="bi bi-eye"></i>
                    </Link><Link to={`#`} className="btn btn-info">
                        <i class="bi bi-pen"></i>
                    </Link>
                    <button className="btn btn-danger ">
                        <i class="bi bi-trash3"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }



    return (
        <Fragment>
            <MetaData title={"All Preinscriptions"}></MetaData>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-12 col-md-10'>
                        <Fragment>
                            <h1 className='my-5 quantify text-danger'> Todas las Preinscripciones</h1>
                            {loading ?
                                <div className='d-flex justify-content-center align-items-center m-5'>
                                    <h2 className='quantify text-white'> Loading...</h2>
                                </div> : (
                                    <MDBDataTable
                                        data={setPreinscriptions()} className="px-3 bordered striped hover text-white border border-danger m-2 p-2">

                                    </MDBDataTable>
                                )}
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
