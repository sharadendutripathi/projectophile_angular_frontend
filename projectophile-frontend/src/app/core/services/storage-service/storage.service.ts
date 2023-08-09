import { Injectable } from '@angular/core';
import {
  BEARER_TOKEN_HEADER,
  BEARER_TOKEN_USERNAME,
  BEARER_USER_ROLE,
} from 'src/app/shared/constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private readonly TOKEN_KEY = BEARER_TOKEN_HEADER;
  private readonly USERNAME = BEARER_TOKEN_USERNAME;
  private readonly USERROLE = BEARER_USER_ROLE;

  // Save the token to localStorage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remove the token from localStorage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setUsername(username: string): void {
    localStorage.setItem(this.USERNAME, username);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME);
  }

  removeUsername(): void {
    localStorage.removeItem(this.USERNAME);
  }

  setUserRole(userRole: string): void {
    localStorage.setItem(this.USERROLE, userRole);
  }

  getUserRole(): any | null {
    return localStorage.getItem(this.USERROLE);
  }

  removeUserRole(): void {
    localStorage.removeItem(this.USERROLE);
  }
}
