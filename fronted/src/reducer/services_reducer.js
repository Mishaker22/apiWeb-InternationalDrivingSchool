import {
    ALL_SERVICES_REQUEST,
    ALL_SERVICES_SUCCES,
    ALL_SERVICES_FAIL,
    CLEAR_ERRORS,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCES,
    SERVICE_DETAILS_FAIL
} from "../constants/services_constant";

export const servicesReducer = (state = { services: [] }, action) => {
    switch (action.type) {
        case ALL_SERVICES_REQUEST:
            return {
                loading: true,
                services: []
            }
        case ALL_SERVICES_SUCCES:
            return {
                loading: false,
                services: action.payload.services,
                cantidad: action.payload.cantidad
            }
        case ALL_SERVICES_FAIL:
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
// REDUCER PARA TENER DETALLES DEL SERVICIO
export const serviceDetailsReducer = (state = { service: {} }, action) => {
    switch (action.type) {
        case SERVICE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SERVICE_DETAILS_SUCCES:
            return {
                loading: false,
                service: action.payload.service 
            }
        case SERVICE_DETAILS_FAIL:
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