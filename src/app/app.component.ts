import { Component } from '@angular/core';
import { user } from './user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GiG | Register';
  // Bind to user model
  user;
  constructor() {
    this.user = user;
  }
}
