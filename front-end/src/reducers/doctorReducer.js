import {
    ALL_DOCTOR_FAIL,
    ALL_DOCTOR_REQUEST,
    ALL_DOCTOR_SUCCESS,
    CLEAR_ERRORS,
    DOCTOR_DETAILS_FAIL,
    DOCTOR_DETAILS_REQUEST,
    DOCTOR_DETAILS_SUCCESS,
    USER_APPOINTMENT_FAIL,
    USER_APPOINTMENT_REQUEST,
    USER_APPOINTMENT_SUCCESS
} from "../constant/doctorConstant";
// get all doctor 
export const doctorReducer = (state = { doctors: [] }, action) => {
    switch (action.type) {
        case ALL_DOCTOR_REQUEST:
            return {
                loading: true,
                doctors: []
            }
        case ALL_DOCTOR_SUCCESS:
            return {
                loading: false,
                doctors: action.payload.doctors,
                doctorsCount: action.payload.doctorsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredDoctorsCount: action.payload.filteredDoctorsCount,
            }
        case ALL_DOCTOR_FAIL:
            return {
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
// get single doctor 
export const doctorDetailsReducer = (state = { doctor: {} }, action) => {
    switch (action.type) {
        case DOCTOR_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case DOCTOR_DETAILS_SUCCESS:
            return {
                loading: false,
                doctor: action.payload,
            }
        case DOCTOR_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
};

//user appointment 
export const userAppointment = (state = { appointment: [] }, action) => {
    switch (action.type) {
        case USER_APPOINTMENT_REQUEST:
            return {
                loading: true,
                ...state
            }
        case USER_APPOINTMENT_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,

            }
        case USER_APPOINTMENT_FAIL:
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
            return state
    }
};
