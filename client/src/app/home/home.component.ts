/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

import { AppState } from '../app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'home',
  styleUrls: [
    './home.component.scss'
  ],
  templateUrl: './home.component.html'

})
export class HomeComponent {

  avatar = 'assets/img/avatar.png';
  banner = 'assets/img/banner.jpeg';

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log("Hola Home");
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
