import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component'; // standalone component

@NgModule({
  declarations: [],        // ❌ No standalone components here
  imports: [
    CommonModule,
    FormsModule,
    CartComponent          // ✅ Import standalone component
  ],
  exports: [
    CartComponent          // Optional: export if used outside
  ]
})
export class ShoppingCartModule { }
