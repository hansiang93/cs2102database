import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  formHasError: boolean;
  isLoggedIn: boolean; //fkin hacky shit that should not exist

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = {};
    this.formHasError = false;
    this.isLoggedIn = false;
  }

  submitForm() {
    this.loginService.loginUser(this.form)
    .then((res) => {
      console.log(res);
      this.isLoggedIn = true;
      this.router.navigate(['/']);
    })
    .catch((res) => {
      this.formHasError = true;
      console.log(res);
      //TODO check error code and handle error accordingly
    });
  }

}
