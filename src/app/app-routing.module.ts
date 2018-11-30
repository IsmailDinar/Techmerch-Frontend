import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products/:categoryId', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
