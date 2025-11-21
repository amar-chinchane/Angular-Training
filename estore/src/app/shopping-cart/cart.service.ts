import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item as CartItem } from './models/Item';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = "http://localhost:8000/cart";

  constructor(private http: HttpClient,private router: Router,) { }

  // Get all items
  getCartItems(): Observable<CartItem[]> {
    
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  // Add item to cart (POST)
  addToCart(item: CartItem) {
    return this.http.post(this.apiUrl, item,{ responseType: 'text' });
  }

  // Update quantity (PUT)
  updateQuantity(item: CartItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item);
  }

  // Remove item (DELETE)
  removeFromCart(id: number)  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
    // this.router.navigateByUrl('/cartItems');
    
  }

  // Clear cart: loop through items OR backend API method if exists
  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl + "/clear");
  }
}
