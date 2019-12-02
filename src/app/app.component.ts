import { Component } from '@angular/core';
import { User } from './classes/user';
import { GLOBAL_COMPONENT_STATE } from './globals/global-component-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleProject';

  state = GLOBAL_COMPONENT_STATE;

  constructor() {
    setTimeout(() => {
      console.log('Initialized user');
      GLOBAL_COMPONENT_STATE.user = new User({ email: 'test@test.net', username: 'testuser' });
    }, 1000);
  }
}
