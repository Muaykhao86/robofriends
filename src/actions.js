import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED} from './constants.js';

// Below - First action => setSearchField()
// -recieves a text input
// -returns a Object with a type and a payload that it sends to the reducer
// Notes - 
// Curly brackets surounded by parenthesis to avoid using 'return'
// Imported a variable containing a string name so that if its spelt wrong it will throw error
// React/redux will not throw error on a string type but will on a mispelt variable 


export const setSearchField = (text) => ({
type: CHANGE_SEARCH_FIELD,
payload: text
})

// HIGHER ORDER FUNCTION => RETURNS ANOTHER FUNCTION that takes dispatch and runs the second half of the function
export const requestRobots = () => (dispatch) => {
dispatch({type: REQUEST_ROBOTS_PENDING});//Straight away dispatch pending action 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))//if we get data back dispatch success and the payload is the data recieved
.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))//if we get a error we dispatch failed and the payload is the error msg
}


