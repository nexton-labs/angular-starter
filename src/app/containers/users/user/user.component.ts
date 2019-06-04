import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../../store/state/app.state';
import { selectSelectedUser } from '../../../store/selectors/user.selector';
import { GetUser } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private store: Store<IAppState>,
               private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
