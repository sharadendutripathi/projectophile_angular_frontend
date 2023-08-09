import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JWTRequest, JWTResponse } from '../../models/interfaces';
import { AuthService } from '../../services/auth-service/auth.service';
import { StorageService } from '../../services/storage-service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  cred: JWTRequest = { number: '', password: '' };

  onLogin() {
    // Implement your login logic here
    this.authService.verifyUser(this.cred).subscribe((res: any) => {
      this.storageService.setToken(res?.jwtToken);
      this.storageService.setUsername(res?.username);
      this.storageService.setUserRole(res?.userRole[0]?.authority);
    });
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
