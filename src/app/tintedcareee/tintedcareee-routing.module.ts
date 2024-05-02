import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TintedcareeePage } from './tintedcareee.page';

const routes: Routes = [
  {
    path: '',
    component: TintedcareeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TintedcareeePageRoutingModule {}
