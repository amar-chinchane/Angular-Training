import { Injectable } from '@angular/core';
import { Customer } from '../../app/membership/models/customer';

@Injectable({ providedIn: 'root' })
export class AuthService {
  status: boolean = false;
  private storageKey = 'LoginUser';

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

}