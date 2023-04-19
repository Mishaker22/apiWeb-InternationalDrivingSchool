import axios, { } from 'axios';

import {
    ALL_SERVICES_REQUEST,
    ALL_SERVICES_SUCCES,
    ALL_SERVICES_FAIL,
    SERVICE_DETAILS_FAIL,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCES,
    CREATE_SERVICE_REQUEST,
    CREATE_SERVICE_SUCCESS,
    CREATE_SERVICE_FAIL,
    CLEAR_ERRORS,
    NEW_PRODUCT_SUBCATEGORIE_REQUEST,
    NEW_PRODUCT_SUBCATEGORIE_SUCCESS,
    NEW_PRODUCT_SUBCATEGORIE_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
    UPDATE_SERVICE_REQUEST,
    UPDATE_SERVICE_SUCCESS,
    UPDATE_SERVICE_FAIL,
    DELETE_SUBCATEGORIE_REQUEST,
    DELETE_SUBCATEGORIE_SUCCESS,
    DELETE_SUBCATEGORIE_FAIL,
    UPDATE_SUBCATEGORIE_REQUEST,
    UPDATE_SUBCATEGORIE_SUCCESS,
    UPDATE_SUBCATEGORIE_FAIL,
    GET_SUBCATEGORIE_REQUEST,
    GET_SUBCATEGORIE_SUCCESS,
    GET_SUBCATEGORIE_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,  
} from '../constants/services_constant';

//dispatch como promesa
//tODOS LOS SERVICIOS
export const getServices = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_SERVICES_REQUEST })
        const { data } = await axios.get('/api/services/listar')
        //si todo sale bien
        dispatch({
            type: ALL_SERVICES_SUCCES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_SERVICES_FAIL,
            payload: error.response.data.message
        })
    }
}
//vER DETALLES DEL SERVICIO

export const getServiceDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SERVICE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/services/get/${id}`)
        //si todo sale bien
        dispatch({
            type: SERVICE_DETAILS_SUCCES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SERVICE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
//vER DETALLES DEL PRODUCTO

export const getProductDetails = (idServicio, idProduct) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        
        const { data } = await axios.get(`/api/services/getProduct?idServicio=${idServicio}&idProduct=${idProduct}`)
        
        //si todo sale bien
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
//TODOS LAS SUBCATEGORIAS DE SERVICIOS
export const getProducts = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_SUBCATEGORIE_REQUEST })

        const { data } = await axios.get(`/api/services/getProducts?idServicio=${id}`)

        dispatch({
            type: GET_SUBCATEGORIE_SUCCESS,
            payload: data.producto
        })

    } catch (error) {

        dispatch({
            type: GET_SUBCATEGORIE_FAIL,
            payload: error.response.data.message
        })
    }
}
//crear un servicio ADMIN
export const newService = (serviceData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_SERVICE_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/services/nuevo', serviceData, config)

        dispatch({
            type: CREATE_SERVICE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CREATE_SERVICE_FAIL,
            payload: error.response.data.message
        })
    }
}
//Registrar un producto dentro de la categoria servicios
export const newProduct = (ProductData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_SUBCATEGORIE_REQUEST })
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/services/newProduct', ProductData, config)
        dispatch({
            type: NEW_PRODUCT_SUBCATEGORIE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_SUBCATEGORIE_FAIL,
            payload: error.response.data.message
        })
    }
}
//Eliminar un servicio
export const deleteService =(id)=> async (dispatch)=>{
    try {
        dispatch({type: DELETE_SERVICE_REQUEST})
        const {data} =await axios.delete(`/api/services/delete/${id}`)

        dispatch({
            type: DELETE_SERVICE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_SERVICE_FAIL,
            payload: error.response.data.message
        })
    }
}
//Update service (admin)
export const updateService =(id, serviceData)=> async (dispatch)=> {
    try {
        dispatch ({type: UPDATE_SERVICE_REQUEST})

        const config={
            headers:{'Content-Type': 'application/json'}
        }
        const {data} =await axios.put(`/api/services/get/${id}`, serviceData, config)

        dispatch({
            type: UPDATE_SERVICE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_SERVICE_FAIL, 
            payload: error.response.data.message
        })
    }
}
//UPDATE PRODUCTO (admin)
export const updateProduct =(idServicio, idProduct, productData)=> async (dispatch)=> {
    try {
        dispatch ({type: UPDATE_SUBCATEGORIE_REQUEST})
        const config={
            headers:{'Content-Type': 'application/json'}
        }
        const {data} =await axios.put(`/api/services/updateProduct?idServicio=${idServicio}&idProduct=${idProduct}`, productData, config)
        dispatch({
            type: UPDATE_SUBCATEGORIE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_SUBCATEGORIE_FAIL, 
            payload: error.response.data.message
        })
    }
}
// ELIMINAR UN PRODUCTO (ADMIN)
export const deleteProduct =(servicioId, idProduct)=> async (dispatch)=>{
    try {
        dispatch({type: DELETE_SUBCATEGORIE_REQUEST})
        const {data} =await axios.delete(`/api/services/deleteProduct?idServicio=${servicioId}&idProduct=${idProduct}`)

        dispatch({
            type: DELETE_SUBCATEGORIE_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_SUBCATEGORIE_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}