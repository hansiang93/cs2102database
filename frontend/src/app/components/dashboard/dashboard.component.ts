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

  removeUser(id: string) {
    this.dashboardService.removeUser(id)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
    this.getUsers(); // refresh users
  }

}
