import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutmPage } from './checkoutm.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutmPageRoutingModule {}
