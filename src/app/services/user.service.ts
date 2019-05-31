import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];

  constructor() { }

  addUser = user => {
    this.users.push(user);
  }

  getUsers = () => {
    return this.users;
  }

  clearUsers = () => {
    this.users = [];

    return this.users;
  }
}
