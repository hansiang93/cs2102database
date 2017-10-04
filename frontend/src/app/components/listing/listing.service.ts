//TODO get projects that have not been funded

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Project } from '../models/project';

const ProjectRoutes = {
  categories: "http://localhost:3000/api/categories",
  projects: "http://localhost:3000/api/allproject"
}

@Injectable()
export class ListingService {

  constructor(
    private http: Http
  ) { }

  getProjects(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(ProjectRoutes.projects)
        .subscribe(
        data => {
          let projects = [];
          let results = data.json();
          for (let project of results) {
            projects.push({
              projectID: project.pid,
              personID: project.creator,
              title: project.title,
              description: project.description,
              category: project.category,
              startDate: project.startdate,
              endDate: project.enddate,
              amountRequested: project.amountrequested
            } as Project)
          }
          resolve(projects);
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