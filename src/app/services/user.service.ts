import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/config/environment';
import { IUserHttp } from '@app/models/user-http.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.usersUrl);
  }
}
