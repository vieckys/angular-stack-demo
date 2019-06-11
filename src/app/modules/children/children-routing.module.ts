import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './pages/manage/manage.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'add',
    component: ManageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
