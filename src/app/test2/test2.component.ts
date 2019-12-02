import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../classes/user';
import { GLOBAL_COMPONENT_STATE } from '../globals/global-component-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  user: User;


  constructor() {
    this.user = new User(GLOBAL_COMPONENT_STATE.user);
    this.subs.push(GLOBAL_COMPONENT_STATE.onUserChanges.subscribe(
      user => {
        console.log(user);
        this.user = new User(user);
      }
    ));
  }

  update() {
    GLOBAL_COMPONENT_STATE.user = this.user;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
