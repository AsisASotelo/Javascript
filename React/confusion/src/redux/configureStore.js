import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {Reducer, initialState} from './reducer';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';




export const ConfigureStore = () => {
    const store = createStore( // Takes an enhancer as second parameter
        // Reducer,
        // initialState OLD IMPLEMENTATION ONLY ONE REDUCER
        combineReducers({
            dishes: DISHES,
            comments:COMMENTS,
            promotions: PROMOTIONS,
            leaders:LEADERS
        }),
        applyMiddleware(thunk,logger) //Being supplied into the store as enhancers, they become available
    );

    return store;
    
}
