import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../models/project';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;
  duration: String;

  constructor() { }

  ngOnInit() {
    //TODO
    // this.duration = (this.project.startDate - Date(this.project.endDate)).toString();
  }

  //TODO
  setProgressBar(): void{
    ;
  }

}
