import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  users: IUser[];

  @Output()
  selectUser: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSelectUser(id: number) {
    this.selectUser.emit(id);
  }
}
