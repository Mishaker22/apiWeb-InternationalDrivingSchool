import axios from 'axios';

import{
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PASSWORD_UPDATE_REQUEST,
    PASSWORD_UPDATE_SUCCESS,
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
    USER_UPDATE_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} from "../constants/user_constant"

//Login
export const login =(email, password)=> async (dispatch)=>{
    try {  
        dispatch({type: LOGIN_REQUEST})

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('/api/user/login',{email,password}, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload:data.user
        })
        
    } catch (error) {
        dispatch({ 
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}
//register 
export const register =(userData)=> async (dispatch)=>{
    try {  
        dispatch({type: REGISTER_USER_REQUEST})

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('/api/user/register',userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload:data.user 
        })
        
    } catch (error) {
        dispatch({ 
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
// UPDATE USUARIO
export const updateProfile =(userData)=> async (dispatch)=>{
    try {  
        dispatch({type: PROFILE_UPDATE_REQUEST})

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.put('/api/user/profile/updateProfile',userData, config)

        dispatch({
            type: PROFILE_UPDATE_SUCCESS,
            payload:data.user 
        })
        
    } catch (error) {
        dispatch({ 
            type: PROFILE_UPDATE_FAIL,
            payload: error.response.data.message
        })
    }
}
//CARGAR USUARIO
export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type: LOAD_USER_REQUEST})
        const {data} = await axios.get('/api/user/profile')
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
//ACTUALIZAR CONTRASEÑA
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: PASSWORD_UPDATE_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.put('/api/user/profile/updatePassword', passwords, config)

        dispatch({
            type: PASSWORD_UPDATE_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: PASSWORD_UPDATE_FAIL,
            payload: error.response.data.message
        })
    }
}
//FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/user/forgotPassword', email, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}
//RESET PASSWORD
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`/api/user/resetPassword/${token}`, passwords, config)

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors=()=>async(dispatch)=> {
    dispatch({
        type: CLEAR_ERRORS
    })
}

//Logout User
export const logout=()=>async(dispatch)=>{
    try {
        axios.get('/api/user/logout')
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}
//ALL USERS
export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST })
        const { data } = await axios.get('/api/user/admon/allUsers')
        //si todo sale bien
        dispatch({
            type: ALL_USERS_SUCCES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}
//Eliminar Usuario
export const deleteUser =(id)=> async (dispatch)=>{
    try {
        dispatch({type: DELETE_USER_REQUEST})
        const {data} =await axios.delete(`/api/user/admon/deleteUser/${id}`)

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: USER_UPDATE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/user/admon/updateUser/${id}`, userData, config)

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response.data.message
        })
    }
}
// detalles de un usuario
export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST })


        const { data } = await axios.get(`/api/user/admon/user/${id}`)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}