import { DELETE_SERVICE_FAIL } from "../constants/services_constant"
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,
    PASSWORD_UPDATE_REQUEST,
    PASSWORD_UPDATE_SUCCESS,
    PASSWORD_UPDATE_RESET,
    PASSWORD_UPDATE_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCES,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_RESET,
    USER_UPDATE_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
} from "../constants/user_constant"

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
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
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_REQUEST:
        case PASSWORD_UPDATE_REQUEST:
        case DELETE_USER_REQUEST:
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                isDelated: true
            }
        case PROFILE_UPDATE_SUCCESS:
        case PASSWORD_UPDATE_SUCCESS:
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case PROFILE_UPDATE_RESET:
        case PASSWORD_UPDATE_RESET:
        case USER_UPDATE_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case PROFILE_UPDATE_FAIL:
        case PASSWORD_UPDATE_FAIL:
        case USER_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_USER_FAIL:
            return{
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

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}
//Reducer mostrar todos los usuarios
export const UsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
            return {
                loading: true,
                users: []
            }
        case ALL_USERS_SUCCES:
            return {
                loading: false,
                users: action.payload.users,
                cantidad: action.payload.cantidad
            }
        case ALL_USERS_FAIL:
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
//Detalles de un usuario
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case USER_DETAILS_FAIL:
            return {
                ...state,
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
