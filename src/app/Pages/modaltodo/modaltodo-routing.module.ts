import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltodoPage } from './modaltodo.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltodoPageRoutingModule {}
