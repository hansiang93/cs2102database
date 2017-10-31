import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
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
    private loginService: LoginService,
    private newProjectService: NewProjectService,
    private router: Router
  ) {
    // check if user is logged in
    // if they are not then redirect to login page
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.resetForm();
  }

  private resetForm(): void {
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
      // console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
