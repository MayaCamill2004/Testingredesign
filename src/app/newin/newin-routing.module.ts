import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewinPage } from './newin.page';

const routes: Routes = [
  {
    path: '',
    component: NewinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewinPageRoutingModule {}
