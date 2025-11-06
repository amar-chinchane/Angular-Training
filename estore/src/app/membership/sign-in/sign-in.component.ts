import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export class Credential  {
  constructor(public  email:string,public  password:string){  }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isValidUser:boolean=false;
  user: Credential=new Credential("amar.chinchane@gmail.com","seed");
  
 
  constructor(private svc:AuthService,private router: Router) {    }  //DI

  onSubmit(formData: any) {
    const form = formData.form.value;
   
    console.log(form.userEmail);
    console.log(form.userPassword);

    this.isValidUser= this.svc.validate(form.userEmail,form.userPassword);
    if(this.isValidUser) 
    {
      console.log("Valid User !");
     // sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
      this.router.navigateByUrl('/productList');
    }
    else {
      console.log("Invalid User !");
      alert('Invalid Credientials...!')
    }

  }

  goToRegister(): any {  this.router.navigateByUrl('/register');}
}