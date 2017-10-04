//TODO get projects that have not been funded

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Project } from '../models/project';

const Routes = {
  getUsers: "http://localhost:3000/api/alluser",
  user: "http://localhost:3000/api/user"
}

@Injectable()
export class DashboardService {

  constructor(
    private http: Http
  ) { }

  //TODO add user model and get rid of any
  getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(Routes.getUsers)
        .subscribe(
        data => {
          console.log(data.json());
          resolve(data.json());
        },
        err => {
            reject({
              success: false,
              data: null
            });
        });
    });
  }

  removeUser(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(Routes.user + id)
        .subscribe(
        data => {
          console.log(data.json());
          resolve(data.json());
        },
        err => {
            reject({
              success: false,
              data: null
            });
        });
    });
  }

}