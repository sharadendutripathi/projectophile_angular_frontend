import { Component } from '@angular/core';
import { NAVBAR } from '../../constants/AuthConstants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {


  
  navBarConstant=NAVBAR;

  currentComponent=this.navBarConstant.HOME;

  navigateToUser(){
    this.currentComponent=NAVBAR.USERS;
  }

  navigateToHome(){
    this.currentComponent=NAVBAR.HOME;
  }


  navigateToAboutUs(){
    this.currentComponent=NAVBAR.ABOUTUS;
  }

  navigateToContactUs(){
    this.currentComponent=NAVBAR.CONTACTUS;
  }

}
