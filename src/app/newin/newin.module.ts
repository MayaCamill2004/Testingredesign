import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewinPageRoutingModule } from './newin-routing.module';

import { NewinPage } from './newin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewinPageRoutingModule
  ],
  declarations: [NewinPage]
})
export class NewinPageModule {}
