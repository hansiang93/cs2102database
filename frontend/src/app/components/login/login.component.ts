import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.form = {};
    this.formHasError = false;
    this.isLoggedIn = false;
  }

  submitForm() {
    this.loginService.loginUser(this.form)
    .then((res) => {
      if (res) {
        // TODO get token from user
        // let token = res.token;
        // localStorage.setItem('id_token', token)
        // this.loginService.storeUserData(token);
        // this.router.navigate(['/dashboard']);
        console.log(res);
        this.isLoggedIn = true;
      } else {
        this.formHasError = true;
      }
    })
    .catch((res) => {
      console.log(res);
      //TODO check error code and handle error accordingly
    });
  }

}
