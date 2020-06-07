import { createAction } from 'redux-actions';
import {
  FETCH_RESTAURANT_DATA,
  SET_RESTAURANT_DATA,
  SET_RESTAURANT_DATA_LOADING,
  REMOVE_RESTAURANT_ITEM,
} from '../constants/actionType';

export const fetchRestaurantData = createAction(FETCH_RESTAURANT_DATA);
export const setRestaurantData = createAction(SET_RESTAURANT_DATA);
export const setRestaurantDataLoading = createAction(
  SET_RESTAURANT_DATA_LOADING,
);
export const removeRestaurantItem = createAction(REMOVE_RESTAURANT_ITEM);
