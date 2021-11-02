import Actions from './Constants.js';

// nu tot store-ul se afla in localStorage ci doar arrayul aferent products
const initialState = {
  products: (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
}

const cartReducer = function(state=initialState, action) {
  switch (action.type) {
    case Actions.delete:
      let deleteState = {
        ...state,
        products: [...state.products]
      };
      deleteState.products = deleteState.products.filter(value=>value.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(deleteState.products));
      return deleteState;
    case Actions.patch:
      let patchState = JSON.parse(JSON.stringify(state));

      patchState.products = patchState.products.map(value=>{
        if(value.id === action.payload.id) {
          value.cantitate = Number(action.payload.cantitate);
        }
        return value;
      });

      //  console.log('put: ', action, state, patchState, JSON.stringify(patchState));
      localStorage.setItem('cart', JSON.stringify(patchState.products));
      return patchState;
    case Actions.post:
      //  console.log('post', action);
      const product = {...action.payload.product}; // produsul care dorim sa il adaugam
      let products = [...state.products]; // produsele deja existente
      let productFound = 0;// am gasit? initial este nu
      
      // parcurgem produsele; daca gasim deja produsul, modificam productFound si crestem cantitatea
      products = products.map((value)=>{
        if(value.id === product.id) {
          value.cantitate ++;
          productFound = 1;
        }
        return value;
      });

      // daca nu am gasit, marcam cantitatea = 1 si facem push
      if(productFound === 0) {
        product.cantitate = 1;
        products.push(product);
      }
      
      const newState = {
        ...state,
        products
      };
        console.log('reducer: ', product, newState, state, action, JSON.stringify(newState));

      localStorage.setItem('cart', JSON.stringify(newState.products));
      return newState;
    default:
      return state;
  }
}

export {cartReducer};