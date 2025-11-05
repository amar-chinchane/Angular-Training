import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { CartService } from '../../../shopping-cart/cart.service';
import { Item } from '../../../shopping-cart/models/Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private cartService: CartService,private router: Router) { }
  cartItems: Item[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getAll();
  };

  add_to_cart(value: Product) {
    console.log(value);
    const cartItem: Item = new Item(value.id, value.title, value.price, value.likes, value.imageurl);
    this.cartService.addToCart(cartItem);
    alert("Product added into cart successful...!")
  }
  redirect_to_cart()
  {
    this.router.navigateByUrl('/cartItems');
  }

}
