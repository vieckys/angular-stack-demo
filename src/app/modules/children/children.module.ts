import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ChildrenRoutingModule } from './children-routing.module';
import { ManageComponent } from './pages/manage/manage.component';

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChildrenModule { }
