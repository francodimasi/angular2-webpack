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
  selector: 'unav',
  styleUrls: [
    './nav.component.scss'
  ],
  templateUrl: './nav.component.html'

})
export class NavComponent {
  avatar = 'assets/img/avatar.png';
  logo = 'assets/img/logo.png';

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `unav` component');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
