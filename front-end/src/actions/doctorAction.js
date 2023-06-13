import axios from "axios";
import { ALL_DOCTOR_FAIL, ALL_DOCTOR_REQUEST, ALL_DOCTOR_SUCCESS, CLEAR_ERRORS, DOCTOR_DETAILS_FAIL, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS } from "../constant/doctorConstant"

export const getDoctor = (currentPage = 1,)=>async(dispatch)=>{
     try{
         
        dispatch({type:ALL_DOCTOR_REQUEST });
        let link = `http://localhost:8000/api/v1/doctors?page=${currentPage}`;
        const {data} = await axios.get(link);
        dispatch({
            type:ALL_DOCTOR_SUCCESS,
            payload:data
        })

     }catch(error){
        dispatch({
            type:ALL_DOCTOR_FAIL,
            payload:error?.error?.response?.data?.message
        })
     }

}

export const getDoctorDetails = (id) => async(dispatch)=>{
     try{
         
        dispatch({type:DOCTOR_DETAILS_REQUEST})
        const {data} = await axios.get(`http://localhost:8000/api/v1/doctors/${id}`)
        dispatch({
            type:DOCTOR_DETAILS_SUCCESS,
            payload:data.doctor
        })


     }catch(error){
        dispatch({
            type:DOCTOR_DETAILS_FAIL,
            payload:error?.error?.response?.data?.message
        })
     }
}

// clear error 

export const clearErrors = () =>(dispatch)=>{
     dispatch({type:CLEAR_ERRORS})
}