import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByconcernPage } from './byconcern.page';

const routes: Routes = [
  {
    path: '',
    component: ByconcernPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByconcernPageRoutingModule {}
