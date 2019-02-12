import {CHANGE_SEARCH_FIELD} from './constants.js';

// Below - First action => setSearchField()
// -recieves a text input
// -returns a Object with a type and a payload that it sends to the reducer
// Notes - 
// Curly brackets surounded by parenthesis to avoid using 'return'
// Imported a variable containing a string name so that if its spelt wrong it will throw error
// React/redux will not throw error on a string type but will on a mispelt variable 


export const setSearchField =(text) => ({
type: CHANGE_SEARCH_FIELD,
payload: text
})