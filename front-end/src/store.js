import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { doctorDetailsReducer, doctorReducer } from "./reducers/doctorReducer";

const reducer = combineReducers({
    // write attributes here 
    user:userReducer,
    doctors:doctorReducer,
    // get doctor details 
    doctorDetails:doctorDetailsReducer,

});

let initialState ={}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;