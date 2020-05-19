import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseURL';

//For server communication import the baseURL

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating,author,comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment:comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment) //Post requires you to send message in the body
        header: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; // when throwing an error you can have a catch down the chain
            }
        },
        error =>{
            var errmess= new Error(error.message);
            throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response))) // Will contain the updated comment
        .catch(error => {console.log('Post comments ', error.message);
                alert('Your comment could not be posted \n' + error.message)})

}

export const fetchDishes = () => (dispatch) => { //This is a thunk
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error; // when throwing an error you can have a catch down the chain
                }
            },
            error =>{
                var errmess= new Error(error.message);
                throw error;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes))) // We must update to handle errors
            .catch(error => dispatch(dishesFailed(error.message)));

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES)); THiS IS REMOVED AS IT WAS SERVER SIMULATION
    // }, 2000);
}

export const dishesLoading=() => ({
    type: ActionTypes.DISHES_LOADING //Returns an action of the type DISHES_LOADING
});

export const dishesFailed=(errmess) =>({
    type:ActionTypes.DISHES_FAILED, //Retursn an action of the type DISHES_FAILED
    payload:errmess //Payload is an error message will be delivered as a payload.
});

export const addDishes = (dishes) =>({ // Takes dish information as a parameters
    type: ActionTypes.ADD_DISHES, // Returns ADD_DISHES as payload
    payload: dishes // Returns dishes as payload

});

export const fetchComments = () => (dispatch) => { //This is a thunk

    return fetch(baseUrl + 'comments')
                .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error; // when throwing an error you can have a catch down the chain
                    }
                },
                error =>{
                    var errmess= new Error(error.message);
                    throw error;
                })
                .then(response => response.json())
                .then(comments => dispatch(addComments(comments))) // We must update to handle errors
                .catch(error => dispatch(commentsFailed(error.message)));
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES)); THiS IS REMOVED AS IT WAS SERVER SIMULATION
    // }, 2000);
}

export const commentsFailed=(errmess) =>({
    type:ActionTypes.COMMENTS_FAILED, //Retursn an action of the type DISHES_FAILED
    payload:errmess //Payload is an error message will be delivered as a payload.
});

export const addComments = (comments) =>({ // Takes dish information as a parameters
    type: ActionTypes.ADD_COMMENTS, // Returns ADD_DISHES as payload
    payload: comments // Returns dishes as payload

});


export const fetchPromos = () => (dispatch) => { //This is a thunk
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
                .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error; // when throwing an error you can have a catch down the chain
                    }
                },
                error =>{
                    var errmess= new Error(error.message);
                    throw error;
                })
                .then(response => response.json())
                .then(promos => dispatch(addPromos(promos))) // We must update to handle errors
                .catch(error => dispatch(promosFailed(error.message)));
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES)); THiS IS REMOVED AS IT WAS SERVER SIMULATION
    // }, 2000);
}

export const promosLoading=() => ({
    type: ActionTypes.PROMOS_LOADING //Returns an action of the type DISHES_LOADING
});

export const promosFailed=(errmess) =>({
    type:ActionTypes.PROMOS_FAILED, //Retursn an action of the type DISHES_FAILED
    payload:errmess //Payload is an error message will be delivered as a payload.
});

export const addPromos = (promos) =>({ // Takes dish information as a parameters
    type: ActionTypes.ADD_PROMOS, // Returns ADD_DISHES as payload
    payload: promos // Returns dishes as payload

});

