import { CHANGE_SEARCH_FIELD } from './constants.js';

// Below 
// A initial state that resets the state at the start of the app
const initialState = {
    searchField:''
}

// Below 
// Reducers recieve a state and a action and if they receive any actions that concerns them
// they will act on it and change the state accordingly
export const searchRobots = (state= initialState, action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        // Returning a new state Object.assign{}, which will have everything from the state and we
        // are going to update the searchField Property with action.payload
        // shorthand alternative...
        // return {...state, searchField:action.payload}
        return Object.assign({}, state, {searchField:action.payload});
        default:
            return state;
    }
} 

