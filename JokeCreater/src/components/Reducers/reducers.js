import { combineReducers } from 'redux';
import { REQUEST_JOKE, RECEIVE_JOKE } from '../Action/action';

const joke = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_JOKE:
      return { ...state, loading: true };
    case RECEIVE_JOKE:
      return { ...state, loading: false, data: action.joke };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  joke,
});

export default rootReducer;
