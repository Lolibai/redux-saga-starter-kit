import { IUser } from '../models/users.models';

export enum UserActionTypes {
  GET_USERS_REQUEST = 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'GET_USERS_FAILURE',
  
  ADD_USER_REQUEST = 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE = 'ADD_USER_FAILURE',
  
  REMOVE_USER_REQUEST = 'REMOVE_USER_REQUEST',
  REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILURE = 'REMOVE_USER_FAILURE',
}

export const GetUsersRequest = () => {
  return {
    type: UserActionTypes.GET_USERS_REQUEST,
    payload: null
  };
};

export const GetUsersSuccess = (users: IUser[]) => {
  return {
    type: UserActionTypes.GET_USERS_SUCCESS,
    payload: users
  };
};

export const GetUsersFailure = (err: any) => {
  return {
    type: UserActionTypes.GET_USERS_FAILURE,
    payload: err
  };
};

export const AddUserRequest = (user: IUser) => {
  return {
    type: UserActionTypes.ADD_USER_REQUEST,
    payload: user
  };
};

export const AddUserSuccess = (user: IUser) => {
  return {
    type: UserActionTypes.ADD_USER_SUCCESS,
    payload: user
  };
};

export const AddUserFailure = (err: any) => {
  return {
    type: UserActionTypes.ADD_USER_FAILURE,
    payload: err
  };
};

export const RemoveUserRequest = (userId: string) => {
  return {
    type: UserActionTypes.REMOVE_USER_REQUEST,
    payload: userId
  };
};

export const RemoveUserSuccess = (userId: string) => {
  return {
    type: UserActionTypes.REMOVE_USER_SUCCESS,
    payload: userId
  };
};

export const RemoveUserFailure = (err: any) => {
  return {
    type: UserActionTypes.REMOVE_USER_FAILURE,
    payload: err
  };
};
