import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
// import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
// import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

// import { IAppState } from '../state/app.state';
import {
  GetUsers,
  GetUsersSuccess,
  USER_ACTIONS
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../models/user-http.interface';
import { selectUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private actions: Actions,
    // private store: Store<IAppState>
  ) {}

  @Effect()
  getUsers = this.actions.pipe(
    ofType<GetUsers>(USER_ACTIONS.GET_USERS),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );
}
