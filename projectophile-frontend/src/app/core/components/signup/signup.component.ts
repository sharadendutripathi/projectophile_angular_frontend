import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  number: string = '';
  email: string = '';
  password: string = '';
  otp: string = '';
  showOtp: boolean = false;
  disableVerifyNumber: boolean = true;

  showOtpInput() {
    // Simulate sending OTP and show OTP input
    console.log(this.number + ',' + this.password);
    if (this.number.length === 10 && this.password.length >= 8) {
      this.showOtp = true;
    }
  }

  verifyAndRegister() {
    // Simulate OTP verification and registration logic
    console.log('Mobile Number:', this.number);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('OTP:', this.otp);
  }

  onSubmit() {
    // Handle form submission if needed
  }

  handleNumberInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const currentInput = inputElement.value;
    const key = event.key;
    this.number = currentInput;
    // Allow only numeric keys, backspace, and delete
    if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {
      event.preventDefault();
    }

    // Allow only a maximum of 10 digits
    if (currentInput.length >= 10 && key !== 'Backspace' && key !== 'Delete') {
      event.preventDefault();
    }
  }

  handleEmailInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const currentInput = inputElement.value;
    this.password = currentInput;

    // Allow only a maximum of 10 digits
    if (this.number.length === 10 && this.password.length >= 8) {
      this.disableVerifyNumber = false;
    }
  }

  handlePasswordInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const currentInput = inputElement.value;
    const key = event.key;
    this.password = currentInput;

    // Allow only a maximum of 10 digits
    if (this.number.length === 10 && this.password.length >= 8) {
      this.disableVerifyNumber = false;
    }
  }
}
