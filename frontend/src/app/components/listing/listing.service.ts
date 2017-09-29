//TODO get projects that have not been funded

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DUMMY_PROJECTS } from './dummy-projects';

const UserRoutes = {
    users: "http://localhost:3000/api/users"
}

@Injectable()
export class ListingService {

  constructor(
    private http: Http
  ) { }

  getDummyProjects() {
    return DUMMY_PROJECTS;
  }

  //test function
  getProjects() {
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

}