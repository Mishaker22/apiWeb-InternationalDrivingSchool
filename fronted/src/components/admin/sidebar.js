import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className='sidebar-wrapper bg-dark  h-100'>
            <nav id='sidebar'>
                <a href="/" className="d-flex text-white text-decoration-none">
                    <span className="mt-4 fs-4 modern"><i class="bi bi-sunglasses"></i> Adm. Servicios <hr></hr></span>
                </a>

                <ul className='list-unstyled components p-2 '>
                    <li className='mb-3 ms-2'>
                        <Link to={"/admin/dashboard"}><i class="bi bi-window-stack"></i> Administracion</Link>
                    </li>
                    <li className='mb-3 ms-2'>
                        <a href='#serviceSubMenu' data-bs-toggle="collapse" aria-expanded="false" className='dropdown-toggle'>
                            <i class="bi bi-car-front"></i> Servicios</a>
                        <ul className='collapse list-unstyled' id='serviceSubMenu'>
                            {/*Botones de servicios*/}
                            <li className='  mt-3'>
                                <Link to={"/admin/listServices"} className="text-success"><i class="bi bi-card-list"></i> Lista de servicios </Link>
                            </li>
                            <li className=' ms-2 mt-3'>
                                <Link to={"/"} className="text-success"><i class="bi bi-plus-circle-fill"></i> Crear servicio </Link>
                            </li>

                        </ul>
                    </li>
                    <li className='mb-3 ms-2'>
                        <Link to={"/admin/listPreinscriptions"}><i class="bi bi-clipboard-check-fill"></i> Preinscripciones</Link>
                    </li>
                    <li className='mb-3 ms-2'>
                        <Link to={"/"}><i class="bi bi-people"></i> Usuarios</Link>
                    </li>
                    <li className='mb-3 ms-2'>
                        <Link to={"/"} className="text-white"><i class="bi bi-currency-dollar"></i> Agregar ingresos </Link>
                    </li>
                    <li className='mb-3 ms-2'>
                        <Link to={"/"} className="text-white"><i class="bi bi-calendar-day"></i> Agendar citas </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar
