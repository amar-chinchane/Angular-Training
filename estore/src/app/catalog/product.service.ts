import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [
    { "id": 12, "title": "Lotus", "description": "Wedding flower", "price": 24, "likes": 800, "imageurl": "/assets/images/lotus.jpg", "isDiscounted": true, "isOutOfStock": true },
    { "id": 13, "title": "Rose", "description": "Valentine flower", "price": 14, "likes": 4000, "imageurl": "/assets/images/rose.jpg", "isDiscounted": true, "isOutOfStock": false },
    { "id": 14, "title": "Jasmine", "description": "Smelling flower", "price": 3, "likes": 9000, "imageurl": "/assets/images/jasmine.jpg", "isDiscounted": true, "isOutOfStock": false },
    { "id": 15, "title": "Tulip", "description": "Beautiful flower", "price": 16, "likes": 3000, "imageurl": "/assets/images/tulip.jpg", "isDiscounted": true, "isOutOfStock": false },
    { "id": 16, "title": "Lily", "description": "Delicate flower", "price": 9, "likes": 6000, "imageurl": "/assets/images/lily.jpg", "isDiscounted": true, "isOutOfStock": false },
    { "id": 17, "title": "Marigold", "description": "Festival flower", "price": 4, "likes": 56000, "imageurl": "/assets/images/marigold.jpg", "isDiscounted": true, "isOutOfStock": false },
  ]

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    // return this.products;
    let apiurl: string = "http://localhost:8000/flowers";
    return this.http.get<Product[]>(apiurl);
  }

  /*getById(id: number):Product {
    return this.products.find(p => p.id === id) as Product;
  }*/

  getById(id: number): Observable<Product> {
    let apiurl = `http://localhost:8000/flowers/${id}`;
    return this.http.get<Product>(apiurl);
  }


  /* add(product: Product): Product {
     product.id = this.products.length + 1;
     this.products.push(product);
     return product;
   }
 
   update(product: Product): Product {
     const index = this.products.findIndex(p => p.id === product.id);
     if (index !== -1) {
       this.products[index] = product;
     }
     return product;
   }
   
   delete(id: number): void {
     this.products = this.products.filter(p => p.id !== id);
   }*/
  add(product: Product): Observable<Product> {
    let apiurl = "http://localhost:8000/flowers";
    return this.http.post<Product>(apiurl, product);
  }

  update(product: Product): Observable<Product> {
    let apiurl = `http://localhost:8000/flowers/${product.id}`;
    return this.http.put<Product>(apiurl, product);
  }

  delete(id: number): Observable<void> {
    let apiurl = `http://localhost:8000/flowers/${id}`;
    return this.http.delete<void>(apiurl);
  }

} 
