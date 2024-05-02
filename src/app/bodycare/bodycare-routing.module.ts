import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodycarePage } from './bodycare.page';

const routes: Routes = [
  {
    path: '',
    component: BodycarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodycarePageRoutingModule {}
