import { Injectable } from '@angular/core';
import { IUser, User } from '../classes/user-deep';
import { Subject, Subscription } from 'rxjs';

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
  private _userSub: Subscription;

  onUserChanges = new Subject<User>();
  get user() {
    return this._user;
  }
  set user(val: User) {
    this._user = val;

    if (this._userSub) {
      this._userSub.unsubscribe();
    }

    if (this._user) {
      this._userSub = this._user.onChanges.subscribe(user => {
        this.onUserChanges.next(user);
      });
    }

    this.onUserChanges.next(this._user);
  }
}