import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './dashboard.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;

  constructor(
    private dashboardService: DashboardService,
    private loginService: LoginService,
    private router: Router
  ) {
    // check if user is logged in
    // if they are not then redirect to login page
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

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
