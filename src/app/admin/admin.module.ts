import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [ManageProductsComponent]
})
export class AdminModule { }
