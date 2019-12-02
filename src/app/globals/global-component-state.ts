import { User, IUser } from '../classes/user'
import { Subject } from 'rxjs';

export interface IGlobalComponentState {
  user: IUser;
}

export class GlobalComponentState implements IGlobalComponentState {
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

  constructor(init?: Partial<IGlobalComponentState>) {
    if (init) {
      if (init.user) { this.user = new User(init.user); }
    }
  }
}

export const GLOBAL_COMPONENT_STATE = new GlobalComponentState();


