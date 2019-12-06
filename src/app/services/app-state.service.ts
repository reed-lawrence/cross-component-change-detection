import { Injectable } from '@angular/core';
import { IUser, User } from '../classes/user';
import { Subject } from 'rxjs';

export interface IAppStateService {
  user: IUser;
  onUserChanges: Subject<IUser>;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService implements IAppStateService {

  constructor() { }

  private _user: User = new User();
  onUserChanges = new Subject<User>();

  get user() {
    return this._user;
  }

  set user(val: User) {
    console.log('new user emitted');
    this._user = val;
    this.onUserChanges.next(this._user);
  }
}
