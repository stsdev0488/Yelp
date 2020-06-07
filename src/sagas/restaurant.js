import { call, put, takeEvery } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';
import {
  FETCH_RESTAURANT_DATA,
  SET_RESTAURANT_DATA,
  SET_RESTAURANT_DATA_LOADING,
} from '../constants/actionType';
import * as API from '../services/restaurant';

function* fetchRestaurant(action) {
  const { location, categories } = action.payload;
  const { response, error } = yield call(
    API.fetchRestaurantData,
    location,
    categories,
  );
  if (response) {
    yield put({ type: SET_RESTAURANT_DATA, payload: response });
  } else {
    Toast.showWithGravity(
      error.response.data.error.description,
      Toast.LONG,
      Toast.CENTER,
    );
  }
  yield put({ type: SET_RESTAURANT_DATA_LOADING, payload: false });
}

export default function* restaurantSaga() {
  yield takeEvery(FETCH_RESTAURANT_DATA, fetchRestaurant);
}
