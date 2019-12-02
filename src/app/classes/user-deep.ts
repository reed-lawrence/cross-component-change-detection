import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

export interface IUser {
  username: string;
  email: string;
}

export class User implements IUser {
  private _email: string = '';
  private _username: string = '';

  onChanges = new Subject<this>();

  get email() {
    return this._email;
  }
  set email(val: string) {
    this._email = val;
    this.onChanges.next(this);
  }

  get username() {
    return this._username;
  }
  set username(val: string) {
    this._username = val;
    this.onChanges.next(this);
  }

  constructor(init?: Partial<IUser>) {
    if (init) {
      if (init.email) { this.email = init.email; }
      if (init.username) { this.username = init.username; }
    }
  }
}



