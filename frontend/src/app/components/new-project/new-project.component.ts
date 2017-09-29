import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project: any;

  constructor() {
  }

  ngOnInit() {
    this.project = {}
    this.project.title = "";
    this.project.date = "";
    this.project.description = "";
    this.project.image = "";
  }

  onSubmit() {
    console.log(this.project);
  }

}
