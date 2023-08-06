import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  currentComponent="home";

  navigateToLogin(){
    this.currentComponent="login";
  }

  navigateToHome(){
    this.currentComponent="home";
  }


  navigateToAboutUs(){
    this.currentComponent="aboutUs";
  }

  navigateToContactUs(){
    this.currentComponent="contactUs";
  }

}
