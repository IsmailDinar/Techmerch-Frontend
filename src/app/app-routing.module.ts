import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LegalinfoComponent } from './legalinfo/legalinfo.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'products/:categoryId', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legalinfo', component: LegalinfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard, AdminAuthGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
