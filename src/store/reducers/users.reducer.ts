import { UserActionTypes } from '../actions/users.actions';
import { IUsersState } from '../models/users.models';

const initialState: IUsersState = {
  users: [],
  error: ''
};

const userReducer = (
  state: IUsersState = initialState,
  action: any
): IUsersState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_REQUEST: {
      return { ...state };
    }
    case UserActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: [...action.payload]
      };
    }
    case UserActionTypes.GET_USERS_FAILURE: {
      return { ...state, error: action.payload };
    }
    
    case UserActionTypes.ADD_USER_REQUEST: {
      return { ...state };
    }
    case UserActionTypes.ADD_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    case UserActionTypes.ADD_USER_FAILURE: {
      return { ...state, error: action.payload };
    }
    
    case UserActionTypes.REMOVE_USER_REQUEST: {
      return { ...state };
    }
    case UserActionTypes.REMOVE_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users.filter(user => user._id !== action.payload)]
      };
    }
    case UserActionTypes.ADD_USER_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
