import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinageingPageRoutingModule } from './skinageing-routing.module';

import { SkinageingPage } from './skinageing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinageingPageRoutingModule
  ],
  declarations: [SkinageingPage]
})
export class SkinageingPageModule {}
