import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { GetUsers } from './../../store/actions/user.actions';

import { IAppState } from '../../store/state/app.state';
import { selectUserList } from '../../store/selectors/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }
}
