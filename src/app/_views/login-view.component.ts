
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services';

@Component({
    templateUrl: '../_templates/login-view.template.html'
})
export class LoginView implements OnInit {

    constructor( private _authService :AuthenticationService ){ }

    ngOnInit() {

    }

}