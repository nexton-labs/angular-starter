import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum USER_ACTIONS {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  // GET_USERS_ERROR =   'GET_USERS_ERROR',
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  // GET_USER_ERROR =   'GET_USER_ERROR'
}

export class GetUsers implements Action {
  public readonly type = USER_ACTIONS.GET_USERS;
}

export class GetUsersSuccess implements Action {
  public readonly type = USER_ACTIONS.GET_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = USER_ACTIONS.GET_USER;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = USER_ACTIONS.GET_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
