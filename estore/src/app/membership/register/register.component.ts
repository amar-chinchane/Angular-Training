import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  customerModel = new Customer('', '', '',91 , 0, new Date(1984, 2, 3), 'Pune', 'S', false, ['T', 'B']);
  // customerModel = new Customer();
  constructor(private router: Router) { }

  onSubmit(formData: any) {

    if (formData.valid) {
      const newUser = formData.value;

      // 🧠 Get existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

      // 🆕 Add the new user
      existingUsers.push(newUser);

      // 💾 Save back to local storage
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

      console.log('✅ New user saved:', newUser);
      alert('User registered successfully!');

      //this.router.navigate('/signin'); 
      this.router.navigateByUrl('/signin');
      //this.router.navigateByUrl('/cartItems');

      // Reset form after saving
      formData.resetForm();
    } else {
      alert('❌ Please fill all required fields correctly.');
    }
  }
  goToLogin():any { this.router.navigateByUrl('/signin'); }
}
