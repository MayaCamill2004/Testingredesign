import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TintedcareeePageRoutingModule } from './tintedcareee-routing.module';

import { TintedcareeePage } from './tintedcareee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TintedcareeePageRoutingModule
  ],
  declarations: [TintedcareeePage]
})
export class TintedcareeePageModule {}
