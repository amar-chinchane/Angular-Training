import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  customerModel = new Customer('', '', '', 91, 0, new Date(1984, 2, 3), 'Pune', 'S', false, ['T', 'B']);

registerModel = {
  username: '',
  password: '',
  role: 'Student'
};

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(formData: any) {

    if (!formData.valid) {
      alert("❌ Please fill all required fields.");
      return;
    }

    const userData = {
      username: this.registerModel.username,
      password: this.registerModel.password,
      role: this.registerModel.role
    };

    console.log("📤 Sending to backend:", userData);

    // CALLING REGISTER SERVICE
    this.authService.register(userData).subscribe({
      next: (response) => {
        alert("🎉 User Registered Successfully!");
        console.log(response);

        formData.resetForm();
        this.router.navigateByUrl('/signin');
      },
      error: (error) => {
        alert(error.error?.message || "Registration failed ❌");
      }
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/signin');
  }
}
