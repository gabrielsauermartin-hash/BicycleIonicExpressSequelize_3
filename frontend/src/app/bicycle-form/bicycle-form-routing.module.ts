import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicycleFormPage } from './bicycle-form.page';

const routes: Routes = [
  /*
  {
    path: '',
    
    component: BicycleFormPage
  },
  */
 
  { path: '', component: BicycleFormPage }, // Crear bici
  { path: ':id', component: BicycleFormPage } // Editar bici
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicycleFormPageRoutingModule {}
