import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  user: Credential=new Credential("ravi.tambade@transflower.in","seed");
 
  constructor(private svc:AuthService) {    }  //DI

  onSubmit(formData: any) {
    const form = formData.form.value;
   
    console.log(form.userEmail);
    console.log(form.userPassword);

    this.isValidUser= this.svc.validate(form.userEmail,form.userPassword);
    if(this.isValidUser) {console.log("Valid User !")}
    else {console.log("Invalid User !")}

    /*if (form.valid) {
      console.log('Form submitted successfully!');
      console.log('Email:', this.user.email);
      console.log('Password:', this.user.password);

      // ✅ Example: You can now call a service or perform login logic here
      // this.authService.login(this.userEmail, this.userPassword).subscribe(...);

      alert('Login successful!');
    } else {
      console.log('Form is invalid');
      alert('Please fill all required fields correctly.');
    }*/
  }
}