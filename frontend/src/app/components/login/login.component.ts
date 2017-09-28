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

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.form = {};
    this.formHasError = false;
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
