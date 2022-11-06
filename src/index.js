import React from 'react';
import ReactDOM from 'react-dom';
import './redux-core/index.css';
import App from './redux-core/App';
import store from './redux-core/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
document.getElementById('root'));