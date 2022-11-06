import { createStore } from 'redux'
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEhancers = composeWithDevTools()

const store = createStore(rootReducer, composeEhancers)

export default store;