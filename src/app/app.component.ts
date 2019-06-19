import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Starter';

  constructor(private auth: AuthService) {
  }

  ngOnInit() {

  }

  handleLogout() {
    this.auth.logout();
  }
}
