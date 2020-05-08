import {DISHES} from '../shared/dishes';

//Implementation of splitting the reducer along with action implementation.

export const Dishes = (state=DISHES,action)=>{
    switch(action.type) {
        default:
            return state;

    }
}