import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacecarePageRoutingModule } from './facecare-routing.module';

import { FacecarePage } from './facecare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacecarePageRoutingModule
  ],
  declarations: [FacecarePage]
})
export class FacecarePageModule {}
