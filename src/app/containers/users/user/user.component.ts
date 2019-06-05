import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '@app/store/state/app.state';
import { selectSelectedUser } from '@app/store/selectors/user.selector';
import { GetUser } from '@app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = this.store.pipe(select(selectSelectedUser));

  constructor( private store: Store<IAppState>,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
