
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';

@Component({
    templateUrl: '../_templates/login-view.template.html'
})
export class LoginView implements OnInit {

    constructor(
        private _authService: AuthenticationService,
        private _router :Router
    ) { }

    form = {
        username : '',
        password : ''
    };
    loading = false;
    error = {};

    onSubmit(){
        
    }

    ngOnInit() {
        this._authService.logout();
    }

    login() {
        this.loading = true;
        this._authService.login(this.form.username, this.form.password)
            .subscribe(result => {
                if(result === true){
                    this._router.navigate(['/']);
                } else {
                    this.error['message'] = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}