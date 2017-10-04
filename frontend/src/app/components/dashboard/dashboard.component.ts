import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dashboardService.getUsers()
    .then(res => {
      this.users = res;
    })
    .catch(err => {
      console.log(err);
    })
  }

}
