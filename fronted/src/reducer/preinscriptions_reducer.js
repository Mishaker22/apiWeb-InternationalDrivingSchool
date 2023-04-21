import {
    ALL_PREINSCRIPTIONS_REQUEST,
    ALL_PREINSCRIPTIONS_SUCCES,
    ALL_PREINSCRIPTIONS_FAIL,
    CLEAR_ERRORS,
    CREATE_PREINSCRIPTION_REQUEST,
    CREATE_PREINSCRIPTION_SUCCESS,
    CREATE_PREINSCRIPTION_FAIL,
    CREATE_PREINSCRIPTION_RESET,
    PREINSCRIPTION_DETAILS_REQUEST,
    PREINSCRIPTION_DETAILS_SUCCES,
    PREINSCRIPTION_DETAILS_FAIL,
    DELETE_PREINSCRIPTION_REQUEST,
    DELETE_PREINSCRIPTION_SUCCESS,
    DELETE_PREINSCRIPTION_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_RESET
} from "../constants/preinscription_constant"

//Todas las preinscripciones
export const preinscriptionsReducer = (state = { preinscriptions: [] }, action) => {
    switch (action.type) {
        case ALL_PREINSCRIPTIONS_REQUEST:
            return {
                loading: true,
                preinscriptions: []
            }
        case ALL_PREINSCRIPTIONS_SUCCES:
            return {
                loading: false,
                preinscriptions: action.payload.preinscriptions,
                cantidad: action.payload.cantidad
            }
        case ALL_PREINSCRIPTIONS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
//REDUCER PARA CREAR UNA PREINSCRIPCION
export const newPreinscriptionReducer = (state = { preinscription: {} }, action) => {
    switch (action.type) {
        case CREATE_PREINSCRIPTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_PREINSCRIPTION_SUCCESS:
            return {
                loading: false,
                success: true,
                preinscription: action.payload
            }
        case CREATE_PREINSCRIPTION_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CREATE_PREINSCRIPTION_RESET:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

// REDUCER PARA TENER DETALLES DEL SERVICIO
export const preinscriptionDetailsReducer = (state = { preinscription: {} }, action) => {
    switch (action.type) {
        case PREINSCRIPTION_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PREINSCRIPTION_DETAILS_SUCCES:
            return {
                ...state,
                loading: false,
                preinscription: action.payload.preinscription
            }
        case PREINSCRIPTION_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
//Reducer para eliminar y editar preinscriptions
export const preinscriptionReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_PREINSCRIPTION_REQUEST:
        case UPDATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_PREINSCRIPTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isDelated: true
            }
        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: true
            }
        case DELETE_PREINSCRIPTION_FAIL:
        case UPDATE_ORDER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_ORDER_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case CLEAR_ERRORS:
            return {
                error: null
            }

        default:
            return state;
    }
}