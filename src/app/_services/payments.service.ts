import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { Payment } from '../_models';

@Injectable()
export class PaymentsService {

  private _url = 'http://localhost:8000/api/payments/?format=json';

  constructor ( private _http :Http) { }

  getHeaders(){
    const headers = new Headers();
    return headers;
  }

  getPayments(){

    return this._http.get(this._url)
      .map(
        (response :Response) => response.json()
      );
  }
}