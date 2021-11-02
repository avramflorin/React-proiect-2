import Actions from './Constants';

const initialState = {};

const favoritesReducer = function(state = initialState, action){
  switch(action.type) {
    case Actions.post:
      let newState = {...state};

      // mult mai simplu: il salvez ca obiect cu proprietate = id; daca exista, ii dau delete, daca nu exista il adaug la obiect
      if(newState[action.payload.id] === undefined) {
        newState[action.payload.id] = action.payload;
      } else {
        delete newState[action.payload.id];
      }
      return newState;
    default: 
      return state;
  }

}

export {favoritesReducer};