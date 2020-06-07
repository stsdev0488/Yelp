import { all } from 'redux-saga/effects';
import restaurantSaga from './restaurant';

export default function* mainSaga() {
  yield all([restaurantSaga()]);
}
