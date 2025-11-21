import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export class Credential {
  constructor(public email: string, public password: string) { }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  user: Credential = new Credential("", "");

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(formData: any) {
    const form = formData.form.value;

    const loginRequest = {
      username: form.userEmail,   // API expects username
      password: form.userPassword
    };

    console.log("Sending Login Data:", loginRequest);

    // ⭐ API LOGIN CALL
    this.authService.login(loginRequest).subscribe(
      (response: any) => {
        console.log("Login Success:", response);

        // If API returns token → save it
        if (response.token) {
          localStorage.setItem("token", response.token);
        }

        // Save logged in user info (optional)
        localStorage.setItem("loggedInUser", loginRequest.username);

        alert("Login Successful!");
        this.router.navigateByUrl('/productList');
      },
      (error) => {
        console.error("Login Error:", error);
        alert(error.error.message || "Invalid Credentials!");
      }
    );
  }

  goToRegister(): any {
    this.router.navigateByUrl('/register');
  }
}
