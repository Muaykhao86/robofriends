import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED} from './constants.js';

// Below 
// A initial state that resets the state at the start of the app
const initialStateSearch = {
    searchField:''
}

// Below 
// Reducers recieve a state (default= inittial state) and a action(default = empty object) and if 
// they receive any actions that concerns them, they will act on it and change the state accordingly
export const searchRobots = (state= initialStateSearch, action={})=>{
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

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state, {error: action.payload, isPending: false})
        default:
            return state;
    }

}

