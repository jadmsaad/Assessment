import {REGISTER_FAIL,REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,USER_LOADED,LOAD_FAIL, UPDATE_SUCCESS} from './constants';
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import {addAlert} from './alert'




export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get("http://localhost:5000/api/user/current")
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }
    catch{
        dispatch({
            type: LOAD_FAIL
        })
    }

}


export const login = ({username,password}) => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({username,password});
    try {

        const res = await axios.post("http://localhost:5000/api/user/login",body,config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        
    } catch (resErrors) {

        const errors = resErrors.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(addAlert(error.msg,"warning")))
        }

        dispatch({
            type:LOGIN_FAIL
        })
    }

    

}

export const register = ({first_name,last_name,username,email,password}) => async dispatch => {


    const config = {
        headers: {
            "Content-Type": "application/json"
        }
        
    }


    const body = JSON.stringify({first_name,last_name,username,email,password});

    try{
        const res = await axios.post("http://localhost:5000/api/user/create",body,config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());

    }
    catch(resErrors){

        const errors = resErrors.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(addAlert(error.msg,"warning")))
        }

        dispatch({
            type:REGISTER_FAIL
        })
    }
}

export const update = ({first_name,last_name,username,email,password}) => async dispatch => {


    const config = {
        headers: {
            "Content-Type": "application/json"
        }
        
    }


    const body = JSON.stringify({first_name,last_name,username,email,password});

    try{
        const res = await axios.post("http://localhost:5000/api/user/update",body,config);
        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        dispatch(addAlert("User updated","success"));

    }
    catch(resErrors){

        const errors = resErrors.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(addAlert(error.msg,"warning")))
        }


    }
}



export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT
    })
}

