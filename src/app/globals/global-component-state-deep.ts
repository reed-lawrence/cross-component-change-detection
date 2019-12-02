import { User, IUser } from '../classes/user-deep'
import { Subject, Subscription } from 'rxjs';

export interface IGlobalComponentState {
  user: IUser;
}

export class GlobalComponentState implements IGlobalComponentState {
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

  constructor(init?: Partial<IGlobalComponentState>) {
    if (init) {
      if (init.user) { this.user = new User(init.user); }
    }
  }
}

export const GLOBAL_COMPONENT_STATE = new GlobalComponentState();


