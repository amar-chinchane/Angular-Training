import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(id: number):void { 

   /* const cartItems = localStorage.getItem('CartItemsStorage').
    const Items  = JSON.parse(cartItems!);
    return Items;*/

    const storedCart = localStorage.getItem('CartItemsStorage');
    if (!storedCart) return;

    let cartItems = JSON.parse(storedCart);
    cartItems = cartItems.filter((item: any) => Number(item.id) !== Number(id));

    localStorage.setItem('CartItemsStorage', JSON.stringify(cartItems));

    console.log(`🗑️ Item with ID ${id} removed from cart.`);
    this.loadCart();
  }

  clearCart() { }
}