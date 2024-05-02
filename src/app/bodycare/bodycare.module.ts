import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodycarePageRoutingModule } from './bodycare-routing.module';

import { BodycarePage } from './bodycare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodycarePageRoutingModule
  ],
  declarations: [BodycarePage]
})
export class BodycarePageModule {}
