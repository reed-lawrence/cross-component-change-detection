import { Component } from '@angular/core';
import { User } from './classes/user';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleProject';

  constructor(
    private state: AppStateService
  ) {
    setTimeout(() => {
      console.log('Initialized user');
      this.state.user = new User({ email: 'test@test.net', username: 'testuser' });
    }, 1000);
  }
}
