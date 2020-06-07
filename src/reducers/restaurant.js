import { handleActions } from 'redux-actions';
import {
  SET_RESTAURANT_DATA_LOADING,
  SET_RESTAURANT_DATA,
  REMOVE_RESTAURANT_ITEM,
} from '../constants/actionType';

const initialState = {
  restaurantData: [],
  restaurantDataLoading: false,
};

export default handleActions(
  {
    [SET_RESTAURANT_DATA_LOADING]: (state, action) => ({
      ...state,
      restaurantDataLoading: action.payload,
    }),
    [SET_RESTAURANT_DATA]: (state, action) => ({
      ...state,
      restaurantData: action.payload.businesses,
    }),
    [REMOVE_RESTAURANT_ITEM]: (state, action) => {
      const filteredData = state.restaurantData.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        restaurantData: filteredData,
      };
    },
  },
  initialState,
);
