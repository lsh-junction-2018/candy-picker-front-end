import { all } from 'redux-saga/effects';
import candyPickerSagas from './candyPickerSagas.js'

export default function* rootSaga() {
  yield all([...candyPickerSagas]);
}
