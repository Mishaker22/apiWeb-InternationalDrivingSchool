import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/metadata'
import Sidebar from './sidebar'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { clearErrors, getPreinscriptionDetails, updateOrder } from '../../actions/preinscriptions_actions'
import { getUserDetails } from '../../actions/user_actions'
import { getProducts, getServiceDetails } from '../../actions/services_actions'
import { UPDATE_ORDER_RESET } from '../../constants/preinscription_constant'

export const PreinscriptionDetails = () => {

    const [param] = useSearchParams();
    const navigate= useNavigate();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numeroId, setNumeroId] = useState(0)
    const [fecha, setFecha] = useState("")
    const [nPaquete, setNPaquete] = useState("");
    const [option, setOption] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [estado, setEstado] = useState("");

    const estados = [
        "CANCELADO",
        "RESERVADO",
        "REALIZADO",
        "SIN RESERVAR FECHA"
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, service, error: errorServices } = useSelector(state => state.serviceDetails)
    const { preinscription, error: errorPreinscription } = useSelector(state => state.preinscriptionsDetails) //este viene del store.js
    const { user, error } = useSelector(state => state.userDetails)
    const { producto, error: errorProduct } = useSelector(state => state.getProducts);
    const { isUpdated, error: errorUpdated } = useSelector(state => state.preinscription)

    const serviceId = param.get('idServicio');
    const idProduct = param.get('idProduct');
    const userId = param.get('userId');
    const preinscriptionId = param.get('idOrder');
    

    useEffect(() => {
        //get user
        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setNombre(user.nombre);
            setApellido(user.apellido);
            setEmail(user.email);
        }
        //get services
        if (service && service._id !== serviceId) {
            dispatch(getServiceDetails(serviceId))
        } else {
            setNPaquete(service.nombre);
        }
        //get preinscription
        if (preinscription && preinscription._id !== preinscriptionId) {
            dispatch(getPreinscriptionDetails(preinscriptionId))
        } else {
            setTelefono(preinscription.telefono);
            setNumeroId(preinscription.numeroId);
            setDireccion(preinscription.direccion);
            setFecha(preinscription.fechaRegistro)
            setEstado(preinscription.estado)
        }
        //GET PRODUCTO
        if (serviceId !== '') {
            dispatch(getProducts(serviceId))
            producto.forEach(p => {
                if (p._id === idProduct) {
                    setOption(p.public_id)
                    setDescripcion(p.descripcion_producto)
                    setPrecio(p.precio)
                }
            });
        }
        if (isUpdated) {
            navigate("/admin/listPreinscriptions")
            alert.success('Estado Actualizada Correctamente');
            dispatch({ type: UPDATE_ORDER_RESET })
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (errorPreinscription) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (errorServices) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error, userId, user, service, errorPreinscription, errorServices, isUpdated])

    const updateOrderHandler = (id) => {
        const formData = new FormData();
        formData.set('estado', estado);

        dispatch(updateOrder(id, formData))
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"detalles preinscripcion"}></MetaData>
                    <div className='backgroundFormus'>
                        <div className=' container container-fluid'>
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <Sidebar></Sidebar>
                                </div>
                                <div className='col-12 col-md-10'>
                                    <div className='d-flex justify-content-center align-items-center mt-4 text-white'>
                                        <Fragment>
                                            <div className='card rounded-3 m-1 cardTransparentTwo mb-5 w-100 p-3'>
                                                <h6 className='cafe text-info'><b>Order: <span className='text-white'>{preinscriptionId}</span> </b><hr></hr></h6>
                                                <div className='card-body'>
                                                    <h5>Detalles de Usuario</h5>
                                                    <div class="row pt-1">
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Nombre:</h6>
                                                            <p >{nombre} {apellido} </p>
                                                            <h6 className='text-info cafe'> Id:</h6>
                                                            <p>{numeroId} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Telefono:</h6>
                                                            <p >{telefono} </p>
                                                            <h6 className='text-info cafe'> Direccion:</h6>
                                                            <p>{direccion} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Email:</h6>
                                                            <p >{email} </p>
                                                        </div>
                                                        <hr></hr>
                                                    </div>
                                                    <h5>Detalles de Servicio</h5>
                                                    <div class="row pt-1">
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Nombre de paquete:</h6>
                                                            <p >{nPaquete} </p>
                                                            <h6 className='text-info cafe'>Opcion:</h6>
                                                            <p>{option} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Precio:</h6>
                                                            <p >{precio} </p>
                                                            <h6 className='text-info cafe'> Fecha de preinscripcion:</h6>
                                                            <p >{String(fecha).substring(0, 10)} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Descripcion:</h6>
                                                            <p>{descripcion} </p>
                                                        </div>
                                                        <hr></hr>
                                                    </div>
                                                    <div class="row pt-1">
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Estado:</h6>
                                                            <div className="form-group">
                                                                <select id='estado_field' className='form-control' name='status'
                                                                    value={estado} onChange={(e) => setEstado(e.target.value)}>
                                                                    {estados.map(estado => (
                                                                    <option value={estado} selected> {estado} </option>
                                                                ))}
                                                                </select>
                                                            </div>       
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                        <button className="btn btn-outline-danger text-white mt-4" onClick={() => updateOrderHandler(preinscriptionId)}>
                                                                Actualizar Estado
                                                            </button>
                                                        </div>
                                                        <hr></hr>
                                                    </div>
                                                </div>
                                            </div>
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
