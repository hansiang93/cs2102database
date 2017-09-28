//TODO add model for user, remove any
//TODO add authorization tokens if there is time

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const UserRoutes = {
    users: "http://localhost:3000/api/users"
}

@Injectable()
export class LoginService {

  constructor(
    private http: Http
  ) { }

  //test function
  getUsers() {
    return new Promise((resolve, reject) => {
      this.http
        .get(UserRoutes.users)
        .subscribe(
        data => {
            resolve({
              success: true, 
              data: data.json()
            });
        },
        err => {
            reject({
              success: false,
              data: null
            });
        });
    });
  }

  //TODO add model for user, remove any
  registerUser(user: any): Promise<any> {
    let headers = new Headers();
    //TODO add authorization tokens if there is time
    
    return new Promise((resolve, reject) => {
      this.http
        .post(UserRoutes.users, user, { headers: headers })
        .subscribe(
        data => {
            resolve({success: true});
        },
        err => {
            reject({success: false});
        });
    });
  }

  loginUser(user: any) {
    let headers = new Headers();
    //TODO add authorization tokens if there is time
    
    return new Promise((resolve, reject) => {
      this.http
        .post(UserRoutes.users, user, { headers: headers })
        .subscribe(
        data => {
            resolve({success: true});
        },
        err => {
            reject({success: false});
        });
    });
  }

}