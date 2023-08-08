import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { NumericInputDirective } from '../shared/directives/numeric-input.directive';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    AuthComponent,
    ContactusComponent,
    AboutusComponent,
    NumericInputDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[AuthComponent, SignupComponent, ForgotPasswordComponent]
})
export class CoreModule { }
