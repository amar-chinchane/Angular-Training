import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  cartItems: any[] = [];

  // Order model
  order = {
    name: '',
    mobile: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // ✅ Load cart items (you can replace this with a real service)
  loadCart() {
    const savedCart = localStorage.getItem('CartItemsStorage');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  // ✅ Total cart amount
  getTotalAmount() {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  // ✅ Place order
  placeOrder() {
    if (!this.order.name || !this.order.mobile || !this.order.address || !this.order.city || !this.order.pincode) {
      alert('⚠️ Please fill in all delivery details.');
      return;
    }

    if (!this.order.paymentMethod) {
      alert('⚠️ Please select a payment method.');
      return;
    }

    const orderData = {
      orderDetails: this.order,
      cartItems: this.cartItems,
      totalAmount: this.getTotalAmount(),
      orderDate: new Date()
    };

    // ✅ Save order temporarily (replace with API call)
    localStorage.setItem('order', JSON.stringify(orderData));

    alert('✅ Order Placed Successfully!');
    localStorage.removeItem('CartItemsStorage');

    this.router.navigate(['/order-success']);
  }

  // ✅ Navigation
  goToCart() {
    this.router.navigate(['/cartItems']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
