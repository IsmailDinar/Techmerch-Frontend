import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsCategoriesNavBarComponent } from './products-categories-nav-bar/products-categories-nav-bar.component';
import { OrdTabCategoryComponent } from './prodCategory/ord-tab-category/ord-tab-category.component';
import { PhonesCategoryComponent } from './prodCategory/phones-category/phones-category.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StockageCategoryComponent } from './prodCategory/stockage-category/stockage-category.component';
import { ImpCopCategoryComponent } from './prodCategory/imp-cop-category/imp-cop-category.component';
import { AccessCategoryComponent } from './prodCategory/access-category/access-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsCategoriesNavBarComponent,
    OrdTabCategoryComponent,
    PhonesCategoryComponent,
    HomeComponent,
    FooterComponent,
    StockageCategoryComponent,
    ImpCopCategoryComponent,
    AccessCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
