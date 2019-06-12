import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildFormComponent } from './pages/child-form/child-form.component';

const routes: Routes = [{
  path: 'add',
  component: ChildFormComponent
}, {
  path: ':id/edit',
  component: ChildFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
