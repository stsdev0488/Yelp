import { combineReducers } from 'redux';
import restaurant from './restaurant';

const appReducer = combineReducers({
  restaurant,
});

export default appReducer;
