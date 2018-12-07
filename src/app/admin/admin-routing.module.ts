import { ManagaOrdersComponent } from './managa-orders/managa-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {path: 'manage-products', component: ManageProductsComponent},
  {path: 'manage-orders', component: ManagaOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
