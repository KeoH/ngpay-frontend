import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Payment } from '../_models';
import { get_server_route } from '../_configs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PaymentsService {

  private _url = get_server_route('/api/payments/?format=json');

  constructor ( 
    private _http :Http,
    private _authService :AuthenticationService
  ) {  }


  getPayments(){
    return this._http.get(this._url, this._authService.getOptions())
      .map(
        (response :Response) => response.json()
      );
  }
}