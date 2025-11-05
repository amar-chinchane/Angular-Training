import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './membership/register/register.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { ListComponent } from './catalog/products/list/list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'productList', component: ListComponent },
  { path: 'cartItems', component: CartComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' } // default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}