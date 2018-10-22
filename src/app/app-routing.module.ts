import { AccessCategoryComponent } from './prodCategory/access-category/access-category.component';
import { ImpCopCategoryComponent } from './prodCategory/imp-cop-category/imp-cop-category.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { PhonesCategoryComponent } from './prodCategory/phones-category/phones-category.component';
import { OrdTabCategoryComponent } from './prodCategory/ord-tab-category/ord-tab-category.component';
import { HomeComponent } from './home/home.component';
import { StockageCategoryComponent } from './prodCategory/stockage-category/stockage-category.component';

const routes: Routes = [
  { path: 'ordinateurs&tablettes', component: OrdTabCategoryComponent },
  { path: 'phones', component: PhonesCategoryComponent },
  { path: '', component: HomeComponent },
  { path: 'stockage', component: StockageCategoryComponent },
  { path: 'impression&copieurs', component: ImpCopCategoryComponent },
  { path: 'accessories', component: AccessCategoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
