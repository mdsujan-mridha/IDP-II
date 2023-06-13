

// login user 

import axios from "axios";
import {
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../constant/userConstant"


export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST });

        const config = { Header: { "Content-type": "application/json" } }
        const { data } = await axios.post(`https://doctorba.onrender.com/api/v1/login`, { email, password }, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}

// register user 
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST });
        const config = { headers: { "Content-type": "multipart/form-data" } };
        const { data } = await axios.post(`https://doctorba.onrender.com/api/v1/register`, userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        })
    }

}

// load user 
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axios.get(`https://doctorba.onrender.com/api/v1/me`)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });


    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL, payload: error.response.data.message
        })
    }
}
// logout user 
export const logout = () => async(dispatch)=>{
     try{
        await axios.get(`https://doctorba.onrender.com/api/v1/logout`)
        dispatch({type:LOGOUT_SUCCESS})
     }catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.error.response.data.message
        })
     }
}
// clear error 
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}