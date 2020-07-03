import {REGISTER_FAIL, REGISTER_SUCCESS,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED, LOGOUT,LOAD_FAIL} from '../actions/constants'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null
};


export default function(state=initialState, action){
    const {type,payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload.token);

            return {...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case USER_LOADED:
            return {...state,

                user: payload,
                isAuthenticated: true,
                loading:false}
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
        case LOAD_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading: false,
                user: null
            }

        
        default:
            return state;
    }
}