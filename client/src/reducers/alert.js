import {ADD_ALERT, REMOVE_ALERT, CLEAR_ALERTS} from '../actions/constants'

const initialState = [];


export default function(state=initialState, action){
    const {type,payload} = action;

    switch(type){
        case ADD_ALERT:
            return [...state,payload ]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        case CLEAR_ALERTS:
            return []
        default:
            return state;
    }
}