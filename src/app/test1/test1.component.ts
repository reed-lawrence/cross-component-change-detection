import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { GLOBAL_COMPONENT_STATE } from '../globals/global-component-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
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
