import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

export interface IUser {
  username: string;
  email: string;
}

export class User implements IUser {
  email: string = '';
  username: string = '';

  constructor(init?: Partial<IUser>) {
    if (init) {
      if (init.email) { this.email = init.email; }
      if (init.username) { this.username = init.username; }
    }
  }
}



