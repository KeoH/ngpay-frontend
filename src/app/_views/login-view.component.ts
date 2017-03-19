
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services';

@Component({
    templateUrl: '../_templates/login-view.template.html'
})
export class LoginView implements OnInit {

    public logged;

    constructor(private _authService: AuthenticationService) { }

    ngOnInit() {

    }

    login(username :string, password :string) {
        this._authService.login(username, password)
            .subscribe(loggin => {
                this.logged = loggin;
            });
    }

    logout() {
        this._authService.logout();
    }


}