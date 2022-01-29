import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/account/master/frame.page';
import { PetsPageComponent } from './pages/account/pets-page/petspage.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { CartPageComponent } from './pages/account/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/account/store/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: CartPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children:[
      { path: 'pets', component: PetsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
