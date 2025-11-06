import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';
import { MembershipModule } from './membership/membership.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CatalogModule, ShoppingCartModule, MembershipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nihilent Training';
  
  constructor(private router: Router) {}
 user = {
    email: '',
    password: '',
  };

  isLoggedIn = false; // Hidden on first load

  

  logout() {
    this.isLoggedIn = false;
    this.user = { email: '', password: '' };
    console.log('User logged out');
  }
  
  onLogout(): void {
    // ✅ Clear everything from localStorage
    localStorage.clear();

    this.router.navigateByUrl('/signin');
  }
}
