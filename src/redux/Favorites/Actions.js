import Actions from './Constants';

const addToFavorites = (payload=>{
  return ({
  type: Actions.post,
  payload: payload
  });

});

export default addToFavorites;