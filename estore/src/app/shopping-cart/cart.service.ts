import { Injectable } from '@angular/core';
import { Item as CartItem } from './models/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'CartItemsStorage';

  constructor() {
    // Initialize sessionStorage with demo data if empty
    //if (!sessionStorage.getItem(this.storageKey)) {


  }

  //Add Product to Cart
  addToCart(item: CartItem): void {

    const cartItems = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    // let cartItems=[];
    cartItems.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(cartItems));

  }

  //Get All Cart Items
  getCartItems(): CartItem[] {

    const cartItems = localStorage.getItem(this.storageKey);
    const Items = JSON.parse(cartItems!);
    return Items;

  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
    let items = this.getCartItems();
    const item = items.find((i) => i.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart(items);
    }
  }

  //Remove Product from Cart
  removeFromCart(productId: number): void {
    let items = this.getCartItems();
    items = items.filter((item) => item.productId !== productId);
    this.saveCart(items);
  }

  //Clear Entire Cart
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

  //Calculate Total Items
  getTotalItems(): number {
     let items = this.getCartItems();
     return items.length;
  }

  //Calculate Total Amount
  getTotalPrice(): number {
      let items = this.getCartItems();
      let total = 0;
      items.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    //save data to sessionStorage
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
