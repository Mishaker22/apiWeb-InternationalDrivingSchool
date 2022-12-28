import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'

export const Dashboard = () => {
    return (
        <Fragment>
            <div className='container container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-12 col-md-10'>
                        <h1 className='quantify text-danger my-4 ms-4'>Panel de control</h1>
                        <Fragment>
                            <MetaData title={"control panel"}></MetaData>
                            <div className='row pr-4'>
                                <div className='col-xl-12 col-sm-4 mb-3'>
                                    <div className='card text-white bg-danger o-hidden h-100'>
                                        <div className='text-center cafe card-header '><b>Ingresos Totales</b></div>
                                        <div className='card-body cardBody text-center'>
                                            <p><b>$850</b></p>
                                        </div>
                                        <Link className='card-footer cardBody border border-danger text-white clearfix small z-1' to={"/"}>
                                            <span className='float-start'> Ver detalles</span>
                                            <span className='float-end'><i class="bi bi-arrow-right-square"></i></span>
                                        </Link>
                                    </div>
                                </div>           
                                 {/*Tarjeta 2*/}
                                 <div className='col-12 col-md-3 mb-3'>
                                    <div className='card text-white bg-danger o-hidden h-100'>
                                        <div className='text-center cafe card-header '><b>Usuarios</b></div>
                                        <div className='card-body cardBody text-center'>
                                            <p><b>150</b></p>
                                        </div>
                                        <Link className='card-footer cardBody border border-danger text-white clearfix small z-1' to={"/"}>
                                            <span className='float-start'> Ver detalles</span>
                                            <span className='float-end'><i class="bi bi-arrow-right-square"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                {/*Tarjeta 3*/}
                                <div className='col-12 col-md-3 mb-3'>
                                    <div className='card text-white bg-danger o-hidden h-100'>
                                        <div className='text-center cafe card-header '><b>Servicios </b></div>
                                        <div className='card-body cardBody text-center'>
                                            <p><b>4</b></p>
                                        </div>
                                        <Link className='card-footer cardBody border border-danger text-white clearfix small z-1' to={"/"}>
                                            <span className='float-start'> Ver detalles</span>
                                            <span className='float-end'><i class="bi bi-arrow-right-square"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                {/*Tarjeta 4*/}
                                <div className='col-12 col-md-3 mb-3'>
                                    <div className='card text-white bg-danger o-hidden h-100'>
                                        <div className='text-center cafe card-header '><b>Preinscripciones Totales</b></div>
                                        <div className='card-body cardBody text-center'>
                                            <p><b>25</b></p>
                                        </div>
                                        <Link className='card-footer cardBody border border-danger text-white clearfix small z-1' to={"/"}>
                                            <span className='float-start'> Ver detalles</span>
                                            <span className='float-end'><i class="bi bi-arrow-right-square"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                {/*tarjeta 5*/}
                                <div className='col-12 col-md-3 mb-3'>
                                    <div className='card text-white bg-danger o-hidden h-100'>
                                        <div className='text-center cafe card-header '><b>Citas de la semana</b></div>
                                        <div className='card-body cardBody text-center'>
                                            <p><b>10</b></p>
                                        </div>
                                        <Link className='card-footer cardBody border border-danger text-white clearfix small z-1' to={"/"}>
                                            <span className='float-start'> Ver detalles</span>
                                            <span className='float-end'><i class="bi bi-arrow-right-square"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
