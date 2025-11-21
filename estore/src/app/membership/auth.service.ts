import { Injectable } from '@angular/core';
import { Customer } from '../../app/membership/models/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  status: boolean = false;
  private storageKey = 'LoginUser';
  constructor(private http: HttpClient) {   
  }

  private apiUrl = "http://localhost:8000/auth";
  validate(loginuser: string, loginpassword: string): boolean {


    const storedUser = localStorage.getItem('registeredUsers');
    const User = JSON.parse(storedUser!);

    if (User.find((u: Customer) => u.email === loginuser)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify(User));
      this.status = true;
      return true;
    }
    else {
      this.status = false;
      return false;
    }
  }

  logout(): any { sessionStorage.setItem(this.storageKey, JSON.stringify([])); }
  getUser(): any { }
  isLoggedIn(): boolean {
    if (this.status = true)
      return true;
    else
      return false;
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

}