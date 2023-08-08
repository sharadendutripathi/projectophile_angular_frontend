import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { JWTRequest, JWTResponse } from '../../models/interfaces';
import { AUTHAPI } from '../../constants/AuthConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router : Router){

  }

  cred:JWTRequest={number:"", password:""}

  auth:JWTResponse={jwtToken:"", username:""}

  onLogin() {
    // Implement your login logic here
    console.log('Logging in with phone number:', this.cred.number, 'and password:', this.cred.password);
  }

  onSignUp() {
    // Implement your sign-up logic here
    console.log('Signing up with phone number:', this.cred.number, 'and password:', this.cred.password);
    this.router.navigate(['signup']);
  }
}
