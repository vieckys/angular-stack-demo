import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccineComponent } from './pages/vaccine/vaccine.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';

const routes: Routes = [{
  path: '',
  component: VaccineComponent
}, {
  path: 'add',
  component: AddVaccineComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineRoutingModule { }
