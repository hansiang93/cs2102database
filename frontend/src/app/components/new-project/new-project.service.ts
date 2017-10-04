//TODO get projects that have not been funded

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Project } from '../models/project';

const Routes = {
  categories: "http://localhost:3000/api/categories",
  project: "http://localhost:3000/api/projects"
}

@Injectable()
export class NewProjectService {

  constructor(
    private http: Http
  ) { }

  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(Routes.categories)
        .subscribe(
        data => {
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

  createProject(project: Project): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(Routes.project, project)
        .subscribe(
        data => {
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