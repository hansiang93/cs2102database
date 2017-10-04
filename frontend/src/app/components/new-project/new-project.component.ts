import { Component, OnInit } from '@angular/core';

import { NewProjectService } from './new-project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project: any;
  categories: any;

  constructor(
    private newProjectService: NewProjectService
  ) {
  }

  ngOnInit() {
    this.project = {}
    this.project.title = "";
    this.project.date = "";
    this.project.description = "";
    // this.project.image = "";
    this.getCategories();
  }

  onSubmit() {
    console.log(this.project);
  }

  getCategories() {
    this.newProjectService.getCategories()
    .then(res => {
      this.categories = res;
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
