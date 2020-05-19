import * as ActionTypes from './ActionTypes';
//Implementation of splitting the reducer along with action implementation.

export const Dishes = (state = {
        isLoading:true,
        errMess: null,
        dishes:[]
    },action) =>{

    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes:action.payload};
        
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess:null, dishes:[]}; //Creates new object state and makes new object

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes:[]};

        default:
            return state;

    }
}