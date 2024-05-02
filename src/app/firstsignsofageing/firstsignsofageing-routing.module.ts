import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstsignsofageingPage } from './firstsignsofageing.page';

const routes: Routes = [
  {
    path: '',
    component: FirstsignsofageingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstsignsofageingPageRoutingModule {}
