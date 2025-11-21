import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { CartService } from '../../../shopping-cart/cart.service';
import { Item } from '../../../shopping-cart/models/Item';
import { Router } from '@angular/router';
import { ProductHighlightDirective } from './product-highlight.directive';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
    ProductHighlightDirective,
    HttpClientModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  add_to_cart(product: Product) {
  
     const cartItem: Item = new Item(product.id, product.title, product.price, product.likes, product.imageurl);
   

    // Call cart API
    this.cartService.addToCart(cartItem).subscribe({
      next: () => {
       // product.addedToCart = true;       // update button in UI
        alert('Product added to cart!');
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add product to cart!');
      }
    });
  }

  redirect_to_cart() {
    this.router.navigateByUrl('/cartItems');
  }

  logout() {
    this.router.navigateByUrl('/signin');
  }
}
