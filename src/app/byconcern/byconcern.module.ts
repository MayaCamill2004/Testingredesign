import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByconcernPageRoutingModule } from './byconcern-routing.module';

import { ByconcernPage } from './byconcern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByconcernPageRoutingModule
  ],
  declarations: [ByconcernPage]
})
export class ByconcernPageModule {}
