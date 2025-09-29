import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicycleFormPage } from './bicycle-form.page';

const routes: Routes = [
  {
    path: '',
    component: BicycleFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicycleFormPageRoutingModule {}
