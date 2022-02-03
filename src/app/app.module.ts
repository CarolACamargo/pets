import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ProductsPageComponent } from './pages/account/store/products-page/products-page.component';
import { PetsPageComponent } from './pages/account/pets-page/petspage.component';
import { CartPageComponent } from './pages/account/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/account/master/frame.page';
import { ProductsCardComponent } from './components/store/products-card/products-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { CheckoutPageComponent } from './pages/account/checkout-page/checkout-page.component';


@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductsCardComponent,
    LoadingComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
