import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicycleFormPageRoutingModule } from './bicycle-form-routing.module';

import { BicycleFormPage } from './bicycle-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BicycleFormPageRoutingModule
  ],
  declarations: [BicycleFormPage]
})
export class BicycleFormPageModule {}
