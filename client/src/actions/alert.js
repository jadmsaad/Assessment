import {ADD_ALERT, REMOVE_ALERT, CLEAR_ALERTS} from './constants';
import {v4 as uuidv4} from "uuid";




export const addAlert = (message,alertVariant) => dispatch => {

    const id = uuidv4();
    dispatch({
        type: ADD_ALERT,
        payload: {message, alertVariant, id}
    })

    // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
}

export const clearAlerts = () => dispatch => {
    dispatch({
        type: CLEAR_ALERTS
    })
}