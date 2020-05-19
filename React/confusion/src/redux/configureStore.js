import { createStore, combineReducers, applyMiddleware } from 'redux';

//import the createForms from react redux form
import {createForms} from 'react-redux-form';
// import {Reducer, initialState} from './reducer';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback} from './forms';




export const ConfigureStore = () => {
    const store = createStore( // Takes an enhancer as second parameter
        // Reducer,
        // initialState OLD IMPLEMENTATION ONLY ONE REDUCER
        combineReducers({
            dishes: Dishes,
            comments:Comments,
            promotions: Promotions,
            leaders:Leaders,
            ...createForms( // React redux forms fills actiontypes on its own
                {feedback:InitialFeedback}
            )
        }),
        applyMiddleware(thunk,logger) //Being supplied into the store as enhancers, they become available
    );

    return store;
    
}
