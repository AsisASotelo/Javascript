import { createStore, combineReducers } from 'redux';
// import {Reducer, initialState} from './reducer';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


export const ConfigureStore = () => {
    const store = createStore(
        // Reducer,
        // initialState OLD IMPLEMENTATION ONLY ONE REDUCER
        combineReducers({
            dishes: DISHES,
            comments:COMMENTS,
            promotions: PROMOTIONS,
            leaders:LEADERS
        })
    );

    return store;
    
}
