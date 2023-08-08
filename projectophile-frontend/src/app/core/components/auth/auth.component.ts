import { Component } from '@angular/core';
import { NAVBAR } from '../../constants/AuthConstants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  navBarConstant = NAVBAR;

  currentComponent = this.navBarConstant.HOME;

  navigateToUser() {
    this.currentComponent = this.navBarConstant.USERS;
  }

  navigateToHome() {
    this.currentComponent = this.navBarConstant.HOME;
  }
  navigateToAboutUs() {
    this.currentComponent = this.navBarConstant.ABOUTUS;
  }

  navigateToContactUs() {
    this.currentComponent = this.navBarConstant.CONTACTUS;
  }
}
