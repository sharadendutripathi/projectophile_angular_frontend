import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JWTRequest, JWTResponse } from '../../models/interfaces';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  cred: JWTRequest = { number: '', password: '' };

  auth: JWTResponse = { jwtToken: '', username: '' };

  onLogin() {
    // Implement your login logic here
    this.authService.verifyUser(this.cred).subscribe((res: any) => {
      this.auth.jwtToken = res.jwtToken;
      this.auth.username = res.username;
    });
    console.log(this.auth);
    console.log(
      'Logging in with phone number:',
      this.cred.number,
      'and password:',
      this.cred.password
    );
  }

  onSignUp() {
    // Implement your sign-up logic here
    console.log(
      'Signing up with phone number:',
      this.cred.number,
      'and password:',
      this.cred.password
    );
    this.router.navigate(['signup']);
  }
}
