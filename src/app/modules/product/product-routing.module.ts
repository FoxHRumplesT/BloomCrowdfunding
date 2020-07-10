import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: ':productId',
    component: ProductComponent
  },
  {
    path: ':productId/pay',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
