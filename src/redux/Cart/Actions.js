import Actions from './Constants';

const addToCart = function(payload) {
  return ({
    type: Actions.post,
    payload
  });
}

export default addToCart;