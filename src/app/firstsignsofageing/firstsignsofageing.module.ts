import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstsignsofageingPageRoutingModule } from './firstsignsofageing-routing.module';

import { FirstsignsofageingPage } from './firstsignsofageing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstsignsofageingPageRoutingModule
  ],
  declarations: [FirstsignsofageingPage]
})
export class FirstsignsofageingPageModule {}
