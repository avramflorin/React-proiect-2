import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {cartReducer} from './reducers/cart.js';
import {userReducer} from './reducers/user';

const middleware = [thunk, logger];

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});


const store = createStore(rootReducer, applyMiddleware(...middleware));


export default store;