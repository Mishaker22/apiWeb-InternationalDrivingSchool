import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../layout/metadata'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { cancelOrder, clearErrors, getPreinscriptionDetails } from '../../actions/preinscriptions_actions'
import { getProducts, getServiceDetails } from '../../actions/services_actions'
import { UPDATE_ORDER_RESET } from '../../constants/preinscription_constant'

export const MyOrderDetails = () => {

    const [param] = useSearchParams();
    const navigate = useNavigate();

    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numeroId, setNumeroId] = useState(0)
    const [fecha, setFecha] = useState("")
    const [nPaquete, setNPaquete] = useState("");
    const [option, setOption] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [estado, setEstado] = useState("")

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, service, error: errorServices } = useSelector(state => state.serviceDetails)
    const { preinscription, error: errorPreinscription } = useSelector(state => state.preinscriptionsDetails) //este viene del store.js
    const { user } = useSelector(state => state.auth)
    const { producto, error: errorProduct } = useSelector(state => state.getProducts);
    const { isUpdated, error } = useSelector(state => state.preinscription)

    const serviceId = param.get('idServicio');
    const idProduct = param.get('idProduct');
    const preinscriptionId = param.get('idOrder');

    useEffect(() => {
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
            setFecha(preinscription.fechaRegistro);
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
            navigate("/MyOrders")
            alert.success('Estado Actualizada Correctamente');
            dispatch({ type: UPDATE_ORDER_RESET })
        }
        if (errorPreinscription) {
            alert.error(errorPreinscription);
            dispatch(clearErrors());
        }
        if (errorServices) {
            alert.error(errorServices);
            dispatch(clearErrors());
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, user, service, errorPreinscription, errorServices, isUpdated, error])

    const updateOrderHandler = (id) => {
        const estado = "CANCELADO"
        const formData = new FormData();
        formData.set('estado', estado);

        dispatch(cancelOrder(id, formData))
    }

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"detalles preinscripcion"}></MetaData>
                    <div className='backgroundOrder'>
                        <div className=' container container-fluid'>
                            <div className="row">
                                <div className='col-12 col-md-12'>
                                    <div className='d-flex justify-content-center align-items-center mt-4 text-white'>
                                        <Fragment>
                                            <div className='card rounded-3 m-1 cardTransparentTwo mb-5 w-100 p-3'>
                                                <h6 className='cafe text-info float-start'><b>Order: <span className='text-white'>{preinscriptionId}</span> </b></h6>
                                                {preinscription.estado && String(preinscription.estado).includes("CANCELADO")
                                                    ? <p style={{ color: "red" }}><span className='cafe text-info'>State:</span> CANCELLED </p>
                                                    : <p style={{ color: "green" }}>{estado}</p>
                                                        && String(preinscription.estado).includes("SIN RESERVAR FECHA")
                                                        ? <p style={{ color: "yellow" }}>NO DATE SCHEDULED</p> :
                                                        <p>{estado}</p>}
                                                <div className='card-body'>
                                                    <h5>Detalles de Usuario</h5>
                                                    <div class="row pt-1">
                                                        <div class="col-4 mb-1">
                                                            {user ? (
                                                                <Fragment>
                                                                    <h6 className='text-info cafe'> Name:</h6>
                                                                    <p >{user.nombre} {user.apellido} </p>
                                                                    <h6 className='text-info cafe'> Email:</h6>
                                                                    <p >{user.email} </p>
                                                                </Fragment>
                                                            ) : !loading}
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Phone Number:</h6>
                                                            <p >{telefono} </p>
                                                            <h6 className='text-info cafe'> Adress:</h6>
                                                            <p>{direccion} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Id:</h6>
                                                            <p>{numeroId} </p>

                                                        </div>
                                                        <hr></hr>
                                                    </div>
                                                    <h5>Detalles de Servicio</h5>
                                                    <div class="row pt-1">
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Package Name:</h6>
                                                            <p >{nPaquete} </p>
                                                            <h6 className='text-info cafe'>Option:</h6>
                                                            <p>{option} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Price:</h6>
                                                            <p >${precio} </p>
                                                            <h6 className='text-info cafe'> Pre-registration date:</h6>
                                                            <p >{String(fecha).substring(0, 10)} </p>
                                                        </div>
                                                        <div class="col-4 mb-1">
                                                            <h6 className='text-info cafe'> Description:</h6>
                                                            <p>{descripcion} </p>
                                                        </div>
                                                        <hr></hr>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <button className="btn btn-outline-danger text-white my-1 " onClick={() => updateOrderHandler(preinscriptionId)}>
                                                                Cancel pre-registration
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
