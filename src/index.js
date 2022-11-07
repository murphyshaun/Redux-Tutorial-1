import React from 'react';
import ReactDOM from 'react-dom';
import './redux-toolkit/index.css';
import App from './redux-toolkit/App';
import store from './redux-toolkit/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
document.getElementById('root'));