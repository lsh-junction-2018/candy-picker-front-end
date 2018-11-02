import { takeEvery, put, call } from 'redux-saga/effects';
import * as ajax from 'modules/ajax';
import apiRoutes from 'modules/apiRoutes';
import { UserActionTypes } from '../actionTypes';

function* postCandyPickerCommandRequest({ command }) {
  const api = apiRoutes.candyPicker.path;
  try {
    yield call(ajax.post, api, {
      action: command
    });
  } catch (ex) {
    console.log(ex);
  }
}

const lapTimeSagas = [
  takeEvery(UserActionTypes.POST_CANDY_PICKER_COMMAND, postCandyPickerCommandRequest)
];

export default lapTimeSagas;
