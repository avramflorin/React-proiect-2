const initialState = {
  data: null,
  loading: false,
  error: null
};

const userReducer = function(state=initialState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case 'UPDATE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default: 
      return state;
  }
}
export {userReducer};