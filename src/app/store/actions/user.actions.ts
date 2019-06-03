import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum USER_ACTIONS {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  // GET_USERS_ERROR =   'GET_USERS_ERROR'
}

export class GetUsers implements Action {
  public readonly type = USER_ACTIONS.GET_USERS;
}

export class GetUsersSuccess implements Action {
  public readonly type = USER_ACTIONS.GET_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export type UserActions = GetUsers | GetUsersSuccess;
