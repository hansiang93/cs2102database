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

  constructor() { }

  ngOnInit() {
  }

  //TODO
  setProgressBar(): void{
    ;
  }

}