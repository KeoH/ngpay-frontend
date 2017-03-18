import { Component } from '@angular/core';

import { AuthenticationService } from './_services';

@Component({
  selector: 'ngpay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngpay works!';
  public logged;

  constructor(private _authService: AuthenticationService) { }

  login() {
    this._authService.login('keoh', 'madness77')
      .subscribe(loggin => {
        this.logged = loggin;
      });
  }

  logout() {
    this._authService.logout();
  }

}
