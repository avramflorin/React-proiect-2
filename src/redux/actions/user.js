import {signInWithGoogle, signOut} from '../../apis/firebase';

export function startLoading() {
  return {
    type: 'START_LOADING',
  }
}

export function updateData(payload) {
  return {
    type: 'UPDATE_DATA',
    payload
  }
}

export function updateError(payload) {
  return {
    type: 'UPDATE_ERROR',
    payload
  }
}

// minunatia de redux nu suporta async
// redux-thunk: actiunile pot fi functii!
// redux thunk o functie primeste automat ca parametru functia dispatch care trimite catre reducer
export function signInWithGooleAction() {
  return function (dispatch) {
    dispatch(startLoading());

    signInWithGoogle()
      .then((result)=>{
        const userData = result.user;
        dispatch(updateData(userData));
      })
      .catch((error)=>{
        dispatch(updateError(error));
      });
  }
}

export function signOutAction() {
  return function (dispatch) {
    dispatch(startLoading());
    signOut()
    .then(() => {
      dispatch(updateData(null));
    })
    .catch((error)=>{
      dispatch(updateError(error));
    });
  }

}