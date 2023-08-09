import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { AuthComponent } from './core/components/header/auth.component';
import { StudentComponent } from './features/student/student.component';
import { MentorComponent } from './features/mentor/mentor.component';
import { AdminComponent } from './features/admin/admin.component';
import { AuthGuard } from './core/services/auth-guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/http-intercepter/auth.interceptor';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'mentor', component: MentorComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppRoutingModule {}
