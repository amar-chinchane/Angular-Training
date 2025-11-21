import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface OrderPayload {
  name: string;
  mobile: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'online';
  items: OrderItem[];
  totalAmount: number;
}

export interface OrderResponse {
  id: string;
  status: string;
  createdAt: string;
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private base = 'http://localhost:3000/api'; // change for prod

  constructor(private http: HttpClient) {}

  placeOrder(payload: OrderPayload): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${this.base}/orders`, payload);
  }

  getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.base}/orders`);
  }
}
