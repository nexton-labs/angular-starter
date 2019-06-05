import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageHelper {

  constructor() { }

  static getItem(key: string): any {
    return localStorage && localStorage.getItem(key);
  }

  static setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
