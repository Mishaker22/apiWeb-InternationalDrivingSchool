import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MetaData from '../layout/metadata';
import Sidebar from './sidebar';
import { clearErrors, getProductDetails,  } from '../../actions/services_actions';
import { useAlert } from 'react-alert';

export const UpdateProduct = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [id, setId] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { producto, error, loading } = useSelector(state => state.productDetails);
    
    const productId = params.id

    useEffect(()=>{
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
    },[dispatch, producto, error, productId])

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"UPDATE PRODUCT"}></MetaData>
                    <div className='backgroundFormus'>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <Sidebar></Sidebar>
                                </div>
                                <div className="col-12 col-md-2"></div>
                                <div className="col-12 col-md-6">
                                    <Fragment>
                                    <form className='shadow-lg text-white'>
                                            <h1 className='quantify text-center text-white'>Actualizar Servicio</h1>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='id_field'>Public Id</label>
                                                <input type="text" id="id_field" className="form-control"
                                                    value={id} onChange={(e) => setId(e.target.value)} disabled/>
                                            </div>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='description_field'>Descripcion del servicio</label>
                                                <textarea rows={"8"} id="description_field" className="form-control"
                                                    value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                            </div>

                                            <div className='form-group mb-4'>
                                                <label className="form-label" htmlFor='precio_field'>Public Id</label>
                                                <input type="text" id="precio_field" className="form-control"
                                                    value={precio} onChange={(e) => setId(e.target.value)} />
                                            </div>
                                            <button id="btnUpdate"
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
        </Fragment >
    )
}
