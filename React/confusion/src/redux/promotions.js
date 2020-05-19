import * as ActionTypes from './ActionTypes';

//Implementation of splitting the reducer along with action implementation.

export const Promotions = (state={
    isLoading:true,
    errMess: null,
    promotions:[]
    },action)=>{
    switch(action.type) {

        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions:action.payload};
        
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess:null, promotions:[]}; //Creates new object state and makes new object

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions:[]};

        default:
            return state;

    }
}