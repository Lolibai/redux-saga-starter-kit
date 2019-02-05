import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as userActions from '../actions/users.actions';
import { getUsers, addUser, removeUser } from '../services/users.services';
import { IUser } from '../models/users.models';

function* fetchUsers() {
  try {
    const data = yield call(getUsers);
    yield put(userActions.GetUsersSuccess(data));
  } catch (err) {
    yield put(userActions.GetUsersFailure(err));
  }
}

function* addUserRequest(request: { type: string; payload: IUser }) {
  try {
    const data = yield call(addUser, request.payload);
    yield put(userActions.AddUserSuccess(data));
  } catch (err) {
    yield put(userActions.AddUserFailure(err.response.data.error.errmsg));
  }
}

function* removeUserRequest(request: { type: string; payload: string }) {
  try {
    const data = yield call(removeUser, request.payload);
    yield put(userActions.RemoveUserSuccess(data));
  } catch (err) {
    yield put(userActions.RemoveUserFailure(err.response.data.error.errmsg));
  }
}

export function* usersSaga() {
  yield all([
    takeEvery(userActions.UserActionTypes.GET_USERS_REQUEST, fetchUsers),
    takeEvery(userActions.UserActionTypes.ADD_USER_REQUEST, addUserRequest),
    takeEvery(userActions.UserActionTypes.REMOVE_USER_REQUEST, removeUserRequest)
  ]);
}
