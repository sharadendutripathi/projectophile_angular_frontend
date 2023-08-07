import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  phoneNumber: string = '';
  password: string = '';

  onLogin() {
    // Implement your login logic here
    console.log('Logging in with phone number:', this.phoneNumber, 'and password:', this.password);
  }

  onSignUp() {
    // Implement your sign-up logic here
    console.log('Signing up with phone number:', this.phoneNumber, 'and password:', this.password);
  }
}
