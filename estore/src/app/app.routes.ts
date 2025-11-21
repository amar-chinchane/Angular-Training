import { RouterModule,Routes } from '@angular/router';
//import { RegisterComponent } from './membership/register/register.component';
//import { SignInComponent } from './membership/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
//import { ListComponent } from './catalog/products/list/list.component';
//import { CartComponent } from './shopping-cart/cart/cart.component';

export const routes: Routes = [
  { path: 'orders', loadComponent :()=> import('./orders/order/order.component').then(m=>m.OrderComponent) },
  { path: 'signin', loadComponent :()=> import('./membership/sign-in/sign-in.component').then(m=>m.SignInComponent)  },
  { path: 'cartItems', loadComponent :()=> import('./shopping-cart/cart/cart.component').then(m=>m.CartComponent)  },
  { path: 'register', loadComponent :()=> import('./membership/register/register.component').then(m=>m.RegisterComponent)  },
  { path: 'productList', loadComponent :()=> import('./catalog/products/list/list.component').then(m=>m.ListComponent)  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' } // default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}