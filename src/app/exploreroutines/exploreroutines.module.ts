import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreroutinesPageRoutingModule } from './exploreroutines-routing.module';

import { ExploreroutinesPage } from './exploreroutines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreroutinesPageRoutingModule
  ],
  declarations: [ExploreroutinesPage]
})
export class ExploreroutinesPageModule {}
