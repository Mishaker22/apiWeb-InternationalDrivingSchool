import {
    ALL_PREINSCRIPTIONS_REQUEST,
    ALL_PREINSCRIPTIONS_SUCCES,
    ALL_PREINSCRIPTIONS_FAIL,
    CLEAR_ERRORS,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_FAIL
} from "../constants/preinscription_constant"

export const preinscriptionsReducer = (state = { preinscriptions: [] }, action) => {
    switch (action.type) {
        case ALL_PREINSCRIPTIONS_REQUEST:
        case ADMIN_ORDERS_REQUEST:
            return {
                loading: true,
                preinscriptions: []
            }
        case ALL_PREINSCRIPTIONS_SUCCES:
            return {
                
                loading: false,
                preinscriptions: action.payload.preinscriptions,
                preinscripcionCount: action.payload.preinscripcionCount,
                resPerPage: action.payload.resPerPage,
                filteredPreinscriptionCount: action.payload.filteredPreinscriptionCount

            }
        case ADMIN_ORDERS_SUCCESS:
            return{
                loading:false,
                preinscriptions:action.payload.preinscriptions
            }
        case ALL_PREINSCRIPTIONS_FAIL:
        case ADMIN_ORDERS_FAIL:
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
/*
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
}*/