import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ChildRoutingModule } from './child-routing.module';
import { ChildFormComponent } from './pages/child-form/child-form.component';

@NgModule({
  declarations: [ ChildFormComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChildModule { }
