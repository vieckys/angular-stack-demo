import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildCardComponent } from './pages/child-card/child-card.component';

const routes: Routes = [{
  path:'',
  children: [{
    path: 'card',
    component: ChildCardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
