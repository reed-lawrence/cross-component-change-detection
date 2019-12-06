import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Subscription } from 'rxjs';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  private subs: Subscription[] = [];
  user: User;

  constructor(
    private state: AppStateService
  ) {
    this.user = new User(this.state.user);
    this.subs.push(this.state.onUserChanges.subscribe(
      user => {
        this.user = new User(user);
      }
    ));
  }

  update() {
    this.state.user = this.user;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
