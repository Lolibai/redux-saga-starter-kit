import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './user.effects';

export default function* rootSaga() {
  yield all([fork(usersSaga)]);
}
