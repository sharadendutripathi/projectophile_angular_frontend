import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { AuthComponent } from './core/components/auth/auth.component';


const routes: Routes = [
  {path:'', component : AuthComponent},
  {path:'signup', component : SignupComponent},
  {path:'forgotpassword', component : ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
