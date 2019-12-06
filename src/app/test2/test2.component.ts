import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../classes/user';
import { Subscription } from 'rxjs';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  // Localized instance of the global user
  user: User;

  // Inject the service as a dependency
  constructor(
    private state: AppStateService
  ) {
    // Localize the instance
    this.user = new User(this.state.user);

    // Add the subscriber to our subscriptions
    this.subs.push(this.state.onUserChanges.subscribe(
      user => {

        // on changes, assign the User to our localized user
        console.log(user);
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
