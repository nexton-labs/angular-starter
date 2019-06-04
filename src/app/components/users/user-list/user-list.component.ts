import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  users: IUser[];

  constructor() { }

  ngOnInit() {
  }

}
