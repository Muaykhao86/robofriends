import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger();
const store = createStore (searchRobots, applyMiddleware(logger));
// Below 
// The provider wraps the app and is responsible for providing the store to all the components in APP
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,document.getElementById('root'));
               
                
registerServiceWorker();
