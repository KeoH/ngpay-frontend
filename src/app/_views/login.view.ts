
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../modules/jwt-auth/_services/authentication.service';

@Component({
    templateUrl: '../_templates/login-view.template.html'
})
export class LoginView implements OnInit {

    constructor(
        private _authService: AuthenticationService
    ) { }

    ngOnInit() {
        this._authService.logout();
    }


}