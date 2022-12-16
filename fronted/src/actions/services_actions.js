import axios from 'axios';

import{
    ALL_SERVICES_REQUEST,
    ALL_SERVICES_SUCCES,
    ALL_SERVICES_FAIL,
    SERVICE_DETAILS_FAIL,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCES,
    CLEAR_ERRORS
} from '../constants/services_constant';

//dispatch como promesa
export const getServices=()=> async(dispatch)=>{
    try{
        dispatch({type: ALL_SERVICES_REQUEST})
        const {data}=await axios.get('/api/services/listar')
        //si todo sale bien
        dispatch({
            type:ALL_SERVICES_SUCCES,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ALL_SERVICES_FAIL,
            payload:error.response.data.message
        })
    }
}
//vER DETALLES DEL SERVICIO

export const getServiceDetails=(id)=> async(dispatch)=>{
    try{
        dispatch({type: SERVICE_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/services/get/${id}`)
        //si todo sale bien
        dispatch({
            type: SERVICE_DETAILS_SUCCES,
            payload: data
        })
    }catch(error){
        dispatch({
            type:SERVICE_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}
//clear error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}