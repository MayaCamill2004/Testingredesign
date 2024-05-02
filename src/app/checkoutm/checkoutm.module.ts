import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutmPageRoutingModule } from './checkoutm-routing.module';

import { CheckoutmPage } from './checkoutm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutmPageRoutingModule
  ],
  declarations: [CheckoutmPage]
})
export class CheckoutmPageModule {}
