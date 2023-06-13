import axios from "axios";
import { ALL_APPOINTMENT_FAIL, ALL_APPOINTMENT_REQUEST, ALL_APPOINTMENT_SUCCESS, ALL_DOCTOR_FAIL, ALL_DOCTOR_REQUEST, ALL_DOCTOR_SUCCESS, CLEAR_ERRORS, DOCTOR_DETAILS_FAIL, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, USER_APPOINTMENT_FAIL, USER_APPOINTMENT_REQUEST, USER_APPOINTMENT_SUCCESS } from "../constant/doctorConstant"

export const getDoctor = (currentPage = 1,) => async (dispatch) => {
    try {

        dispatch({ type: ALL_DOCTOR_REQUEST });
        let link = `http://localhost:8000/api/v1/doctors?page=${currentPage}`;
        const { data } = await axios.get(link);
        dispatch({
            type: ALL_DOCTOR_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_DOCTOR_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }

}

export const getDoctorDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: DOCTOR_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:8000/api/v1/doctors/${id}`)
        dispatch({
            type: DOCTOR_DETAILS_SUCCESS,
            payload: data.doctor
        })


    } catch (error) {
        dispatch({
            type: DOCTOR_DETAILS_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }
}

// clear error 

// get user appointment
export const getUserAppointment = () => async (dispatch) => {
    try {
          
        dispatch({type:USER_APPOINTMENT_REQUEST})
        const {data} = await axios.get(`http://localhost:8000/api/v1/allappointment`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        dispatch({
            type:USER_APPOINTMENT_SUCCESS,
            payload:data?.data,
        })

    } catch (error) {
        dispatch({
            type: USER_APPOINTMENT_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }
}
// get all appointment by admin 
export const getAllAppointments = () => async (dispatch) => {
    try {
          
        dispatch({type:ALL_APPOINTMENT_REQUEST})
        const {data} = await axios.get(`http://localhost:8000/api/v1/admin/appointments`)
        dispatch({
            type:ALL_APPOINTMENT_SUCCESS,
            payload:data,
        })

    } catch (error) {
        dispatch({
            type: ALL_APPOINTMENT_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }
}


export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
};
