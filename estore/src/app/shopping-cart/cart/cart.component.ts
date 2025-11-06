import { Component } from '@angular/core';
import { Item as CartItem, Item } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../../membership/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService,private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(id: number):void { 
    this.cartService.removeFromCart(id); 
    this.loadCart();
  }

  clearCart() { 
      this.cartService.clearCart();
      this.router.navigateByUrl('/productList');
   }
   goToProducts(){ this.router.navigateByUrl('/productList');}
   logout(){
    this.router.navigateByUrl('/signin');
    this.authService.logout();
  }
   updateQuantity(cartItem:Item){return 0;}
   getTotalAmount(){
    
    return this.cartService.getTotalPrice();
  }
}
