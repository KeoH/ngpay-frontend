import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { get_server_route } from '../../../app/_configs';

@Injectable()
export class AuthenticationService {

    public token: string;
    _url_token = get_server_route('/api-token-auth/');

    constructor(private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getTokenHeaders() {
        return new Headers({
            'Content-Type': 'application/json'
        });
    }

    getHeaders() {
        return new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + this.token
        });
    }

    getTokenOptions() {
        return new RequestOptions({ headers: this.getTokenHeaders() })
    }

    getOptions() {
        return new RequestOptions({ headers: this.getHeaders() })
    }

    login(user: string, passwrd: string): Observable<any> {

        return this.http.post(this._url_token, JSON.stringify({
            username: user,
            password: passwrd
        }), this.getTokenOptions())
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({
                        username: user,
                        token: token
                    }));
                    return true;
                } else {
                    return false;
                }
            });

    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}