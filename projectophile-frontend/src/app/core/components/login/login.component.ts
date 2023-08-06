import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  phoneNumber: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login(): void {
    // Add your login logic here
    console.log('Login button clicked');
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
