import axios from 'axios';

import{
    ALL_PREINSCRIPTIONS_REQUEST,
    ALL_PREINSCRIPTIONS_SUCCES,
    ALL_PREINSCRIPTIONS_FAIL,
    CLEAR_ERRORS,
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_FAIL,
    CREATE_PREINSCRIPTION_REQUEST,
    CREATE_PREINSCRIPTION_SUCCESS,
    CREATE_PREINSCRIPTION_FAIL,
    PREINSCRIPTION_DETAILS_REQUEST,
    PREINSCRIPTION_DETAILS_SUCCES,
    PREINSCRIPTION_DETAILS_FAIL,
    DELETE_PREINSCRIPTION_REQUEST,
    DELETE_PREINSCRIPTION_SUCCESS,
    DELETE_PREINSCRIPTION_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL
} from '../constants/preinscription_constant';

//dispatch como promesa
//Ver preinscripciones

export const getPreinscriptions=()=> async(dispatch)=>{
    try{
        dispatch({type: ALL_PREINSCRIPTIONS_REQUEST})
        const {data}=await axios.get('/api/preinscription/admin/orderList')
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

//vER DETALLES DE Preinscripcion
export const getPreinscriptionDetails= (id) => async (dispatch) => {
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
}
//clear error
//NUEVA PREINSCRIPCION
export const newPreinscription = (preinscriptionData) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_PREINSCRIPTION_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/preinscription/new`, preinscriptionData, config)

        dispatch({
            type: CREATE_PREINSCRIPTION_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: CREATE_PREINSCRIPTION_FAIL,
            payload: error.response.data.message
        })
    }
}
//ELIMINAR PREINSCRIPTION
export const deletePreinscription =(id)=> async (dispatch)=>{
    try {
        dispatch({type: DELETE_PREINSCRIPTION_REQUEST})
        const {data} =await axios.delete(`/api/preinscription/admin/order/${id}`)

        dispatch({
            type: DELETE_PREINSCRIPTION_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_PREINSCRIPTION_FAIL,
            payload: error.response.data.message
        })
    }
}
//UPDATE PREINSCRIPTION
export const updateOrder = (id, orderData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ORDER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/preinscription/admin/order/${id}`, orderData, config)

        dispatch({
            type: UPDATE_ORDER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
