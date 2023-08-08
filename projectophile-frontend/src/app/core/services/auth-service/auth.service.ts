import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTHAPI } from '../../constants/AuthConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerStudent(data:any){
    return this.http.post(AUTHAPI.baseURL+AUTHAPI.REGISTERSTUDENT, data);
  }
  
  createMentor(data:any){
    return this.http.post(AUTHAPI.CRETAEMENTOR, data);
  }

  verifyUser(data:any){
    return this.http.post(AUTHAPI.baseURL+AUTHAPI.AUTHENTICATEUSER, data);
  }

}
