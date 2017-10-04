import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

import { Project } from '../models/project';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  projects: Project[];

  constructor(
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(): void {
    this.listingService.getProjects()
    .then(res => {
      this.projects = res;
      console.log(this.projects);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
