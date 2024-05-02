import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreroutinesPage } from './exploreroutines.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreroutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreroutinesPageRoutingModule {}
