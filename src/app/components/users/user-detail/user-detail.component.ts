import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '@app/models/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
