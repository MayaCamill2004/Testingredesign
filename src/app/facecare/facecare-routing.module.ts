import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacecarePage } from './facecare.page';

const routes: Routes = [
  {
    path: '',
    component: FacecarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacecarePageRoutingModule {}
