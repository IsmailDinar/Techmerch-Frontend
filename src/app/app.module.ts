import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './bars/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ClickOutsideModule } from 'ng-click-outside';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './bars/header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchBoxComponent } from './bars/search-box/search-box.component';
import { SearchPipe } from './pipes/search.pipe';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LegalinfoComponent } from './legalinfo/legalinfo.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent,
    SearchBoxComponent,
    SearchPipe,
    ContactComponent,
    ErrorComponent,
    LegalinfoComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClickOutsideModule,
    Ng5SliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CookieService, CartService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
