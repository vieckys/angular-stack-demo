import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineRoutingModule } from './vaccine-routing.module';
import { VaccineComponent } from './pages/vaccine/vaccine.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';

@NgModule({
  declarations: [VaccineComponent, VaccineListComponent, AddVaccineComponent],
  imports: [
    CommonModule,
    VaccineRoutingModule
  ]
})
export class VaccineModule { }
