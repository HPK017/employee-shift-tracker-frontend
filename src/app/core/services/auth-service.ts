import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  register(data : any) {
    return this.http.post(`${this.baseUrl}/employees/register`, data);
  }

  login(data : any) {
    return this.http.post(`${this.baseUrl}/employees/login`, data);
  }

}
