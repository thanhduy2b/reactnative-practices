import { combineReducers } from 'redux';

import { signInReducer } from 'redux/signin';

const RESET_ERROR_MESSAGE = 'Reset Error Message';

function errorMessage(state = null, action) {
  const { type, error } = action;
  if(type === RESET_ERROR_MESSAGE) {
    return null;
  }
  else if(error) {
    return action.error;
  }

  return state;
}

const reducers = {
  errorMessage,
  signInReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer;
