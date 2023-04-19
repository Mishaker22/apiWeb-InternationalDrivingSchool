import {
    ALL_SERVICES_REQUEST,
    ALL_SERVICES_SUCCES,
    ALL_SERVICES_FAIL,
    CLEAR_ERRORS,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCES,
    SERVICE_DETAILS_FAIL,
    CREATE_SERVICE_REQUEST,
    CREATE_SERVICE_SUCCESS,
    CREATE_SERVICE_FAIL,
    CREATE_SERVICE_RESET,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
    NEW_PRODUCT_SUBCATEGORIE_REQUEST,
    NEW_PRODUCT_SUBCATEGORIE_SUCCESS,
    NEW_PRODUCT_SUBCATEGORIE_FAIL,
    NEW_PRODUCT_SUBCATEGORIE_RESET,
    UPDATE_SERVICE_REQUEST,
    UPDATE_SERVICE_SUCCESS,
    UPDATE_SERVICE_FAIL,
    UPDATE_SERVICE_RESET,
    DELETE_SUBCATEGORIE_REQUEST,
    DELETE_SUBCATEGORIE_SUCCESS,
    DELETE_SUBCATEGORIE_FAIL,
    DELETE_SUBCATEGORIE_RESET,
    UPDATE_SUBCATEGORIE_REQUEST,
    UPDATE_SUBCATEGORIE_SUCCESS,
    UPDATE_SUBCATEGORIE_FAIL,
    UPDATE_SUBCATEGORIE_RESET,
    GET_SUBCATEGORIE_REQUEST,
    GET_SUBCATEGORIE_SUCCESS,
    GET_SUBCATEGORIE_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/services_constant";
import { PROFILE_UPDATE_FAIL } from "../constants/user_constant";

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
// REDUCER PARA TENER DETALLES DEL PRODUCTO
export const productDetailsReducer = (state = { producto: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                producto: action.payload
            }

        case PROFILE_UPDATE_FAIL:
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
            return state
    
    }
}
export const newServiceReducer = (state = { service: {} }, action) => {
    switch (action.type) {
        case CREATE_SERVICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_SERVICE_SUCCESS:
            return {
                loading: false,
                success: true,
                service: action.payload.service
            }
        case CREATE_SERVICE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CREATE_SERVICE_RESET:
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
export const newProductReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_PRODUCT_SUBCATEGORIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PRODUCT_SUBCATEGORIE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case NEW_PRODUCT_SUBCATEGORIE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PRODUCT_SUBCATEGORIE_RESET:
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

export const serviceReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_SERVICE_REQUEST:
        case DELETE_SUBCATEGORIE_REQUEST:
        case UPDATE_SUBCATEGORIE_REQUEST:
        case UPDATE_SERVICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_SERVICE_SUCCESS:
        case DELETE_SUBCATEGORIE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDelated: true
            }
        case UPDATE_SERVICE_SUCCESS:
        case UPDATE_SUBCATEGORIE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                isUpdated: action.payload
            }
        case DELETE_SERVICE_FAIL:
        case UPDATE_SERVICE_FAIL:
        case UPDATE_SUBCATEGORIE_FAIL:
        case DELETE_SUBCATEGORIE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SERVICE_RESET:
        case UPDATE_SUBCATEGORIE_RESET:
            return {
                ...state,
                isUpdated: false,
                success: false
            }
        case DELETE_SUBCATEGORIE_RESET:
            return{
                ...state,
                isDelated:false,
            }
        case CLEAR_ERRORS:
            return {
                error: null
            }

        default:
            return state;
    }
}
export const getProductsReducer = (state = { producto: [] }, action) => {
    switch (action.type) {

        case GET_SUBCATEGORIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_SUBCATEGORIE_SUCCESS:
            return {
                loading: false,
                producto: action.payload
            }

        case GET_SUBCATEGORIE_FAIL:
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
            return state
    }
}
