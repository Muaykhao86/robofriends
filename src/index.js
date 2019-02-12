import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();// redux-logger

//Below
// You need compose() from redux to get addon to work with middleware and to use multiple Middleware=> => => https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Below
// You need combineReducers() from redux to combine all reducers to one root reducer in the store
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));
// Above = from => const store = createStore (searchRobots, applyMiddleware(logger));

// Below 
// The provider wraps the app and is responsible for providing the store to all the components in APP
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,document.getElementById('root'));
               
                
registerServiceWorker();
