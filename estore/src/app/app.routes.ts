import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './membership/register/register.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' } // default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}