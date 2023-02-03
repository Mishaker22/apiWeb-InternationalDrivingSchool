import axios from 'axios';

import{
    ALL_PREINSCRIPTIONS_REQUEST,
    ALL_PREINSCRIPTIONS_SUCCES,
    ALL_PREINSCRIPTIONS_FAIL,
    CLEAR_ERRORS,
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_FAIL
} from '../constants/preinscription_constant';

//dispatch como promesa
//Ver preinscripciones

export const getPreinscriptions=()=> async(dispatch)=>{
    try{
        dispatch({type: ALL_PREINSCRIPTIONS_REQUEST})
        const {data}=await axios.get('/api/preinscription/admin/orders')
        //si todo sale bien
        dispatch({
            type: ALL_PREINSCRIPTIONS_SUCCES,
            payload:data
        })
    }catch(error){
        dispatch({
            type: ALL_PREINSCRIPTIONS_FAIL,
            payload:error.response.data.message
        })
    }
}
export const getAdminOrders=()=>async(dispatch)=>{
    try {
        dispatch({type: ADMIN_ORDERS_REQUEST})
        const {data} =await axios.get('/api/preinscription/admin/orderList')
        dispatch({
            type:ADMIN_ORDERS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ORDERS_FAIL,
            payload:error.response.data.message
        })
    }
}

//vER DETALLES DE Preinscripcion
/*
export const getPreinscriptionDetails=(id)=> async(dispatch)=>{
    try{
        dispatch({type: PREINSCRIPTION_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/preinscription/${id}`)
        //si todo sale bien
        dispatch({
            type: PREINSCRIPTION_DETAILS_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type:PREINSCRIPTION_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}*/
//clear error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}