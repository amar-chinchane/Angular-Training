import { Component } from '@angular/core';
import { Item as CartItem, Item } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../../membership/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id).subscribe(() => {
      this.loadCart();
    });
  }

  updateQuantity(item: Item) {
    this.cartService.updateQuantity(item).subscribe(() => {
      this.loadCart();
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.router.navigateByUrl('/productList');
    });
  }

  getTotalAmount() {
    return this.cartItems.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  }

  checkout() {
    this.router.navigateByUrl('/orders');
  }

  goToProducts() {
    this.router.navigateByUrl('/productList');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/signin');
  }
}
