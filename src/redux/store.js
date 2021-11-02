import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// se importa redux-logger ca sa apara in consola toate logurile
import logger from 'redux-logger';

import {cartReducer} from './Cart/Reducer.js';
import {userReducer} from './User/Reducer';
import {favoritesReducer} from './Favorites/Reducer.js';

const middleware = [thunk, logger];

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  user: userReducer
});


const store = createStore(rootReducer, applyMiddleware(...middleware));


export default store;