import { Injectable } from '@angular/core';
import { Customer } from '../../app/membership/models/customer';
@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(loginuser: string, loginpassword: string): boolean {
    console.log(loginuser);
    console.log(loginpassword);

    const storedUser = localStorage.getItem('registeredUsers');
    const User = JSON.parse(storedUser!);
    if(User.find((u:Customer) => u.email === loginuser) )
        return true;
    else
        return false;
     
 }

 logout(): any {   }
 getUser(): any {   }
 isLoggedIn(): boolean {   return false;  }
}