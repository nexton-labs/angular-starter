import { USER_ACTIONS } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      };
    }

    case USER_ACTIONS.GET_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};
