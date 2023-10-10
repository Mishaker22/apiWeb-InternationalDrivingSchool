import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/metadata'
import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'
import { getPreinscriptions } from '../../actions/preinscriptions_actions'
import { useAlert } from 'react-alert'
import { getProducts } from '../../actions/services_actions'
import { deletePreinscription } from '../../actions/preinscriptions_actions'


export const PreinscriptionList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, preinscriptions, error } = useSelector(state => state.preinscriptions)
    const { producto, error: errorProduct } = useSelector(state => state.getProducts);

    const deleteOrderHandler = (id) => {
        const response = window.confirm("Estas seguro de querer eliminar esta preinscripcion?")
        if (response) {
            dispatch(deletePreinscription(id))
            window.location.reload(false)
            alert.success("Preinscripcion eliminada correctamente")
        }
    }

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        if (errorProduct) {
            return alert.error(error)
        }

        dispatch(getPreinscriptions());


    }, [dispatch, alert, error, errorProduct])

    const setPreinscriptions = () => {
        const data = {
            columns: [
                {
                    label: "Fecha",
                    field: "fecha",
                    sort: "asc"
                },
                {
                    label: "Id Orden",
                    field: "id",
                    sort: "asc"
                },  
                {
                    label: "Id Usuario",
                    field: "numeroId",
                    sort: "asc"
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
            var fecha= new Date(order.fechaRegistro).toLocaleDateString()
            data.rows.push({
                fecha: fecha,
                id: order._id,
                numeroId: order.numeroId,
                estado: order.estado,
                acciones: <Fragment>
                    <Link to={`/admin/preinscriptionDetails?idOrder=${order._id}&idServicio=${order.service}&idProduct=${order.producto}&userId=${order.user}`} className="btn btn-primary py-1 px-2 ">
                        <i class="bi bi-eye "></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ms-1" onClick={()=>deleteOrderHandler(order._id)}>
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
