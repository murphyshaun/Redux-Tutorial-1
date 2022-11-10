import React from 'react';
import ReactDOM from 'react-dom';
import './redux-thunk/index.css';
import App from './redux-thunk/App';
import store from './redux-thunk/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
document.getElementById('root'));