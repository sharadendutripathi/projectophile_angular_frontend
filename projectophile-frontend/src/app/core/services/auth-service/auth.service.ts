import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTHAPI } from '../../constants/AuthConstants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerStudent(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(AUTHAPI.baseURL + AUTHAPI.REGISTERSTUDENT, data, {
      headers,
    });
  }

  verifyAndRegister(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(AUTHAPI.baseURL + AUTHAPI.VERIFYANDREGISTER, data, {
      headers,
    });
  }

  createMentor(data: any) {
    return this.http.post(AUTHAPI.CRETAEMENTOR, data);
  }

  verifyUser(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(AUTHAPI.baseURL + AUTHAPI.AUTHENTICATEUSER, data, {
      headers,
    });
  }
}
