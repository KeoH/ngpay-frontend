import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthenticationService } from '../_services';


@Component({
  selector: 'login-form',
  templateUrl: '../_templates/components/login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  error = {};
  loading = false;
  form :FormGroup;
  constructor(
    private _router :Router,
    public fb :FormBuilder,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username : '',
      password : ''
    })
  }

  onSubmit() {
    console.log("enviando");
    this.login();
  }

  login() {
    this.loading = true;
    this._authService.login(this.form.value.username, this.form.value.password)
      .subscribe(result => {
        if (result === true) {
          this._router.navigate(['/']);
        } else {
          this.error['message'] = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
