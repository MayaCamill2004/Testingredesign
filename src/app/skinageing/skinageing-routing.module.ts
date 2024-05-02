import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinageingPage } from './skinageing.page';

const routes: Routes = [
  {
    path: '',
    component: SkinageingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinageingPageRoutingModule {}
