//TODO add model for user, remove any
//TODO add authorization tokens if there is time

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const UserRoutes = {
    login: "http://localhost:3000/users/login"
}

@Injectable()
export class LoginService {
  isLoggedIn: Boolean;

  constructor(
    private http: Http
  ) {
    this.isLoggedIn = false;
  }

  loginUser(user: any): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http
        .post(UserRoutes.login, user)
        .subscribe(
        data => {
          this.isLoggedIn = true;
          resolve({success: true});
        },
        err => {
          reject({success: false});
        });
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}