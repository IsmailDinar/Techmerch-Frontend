import { CartService } from './services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './bars/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesBarComponent } from './bars/categories-bar/categories-bar.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './bars/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CategoriesBarComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesBarComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
