import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';

import { InputPropretyComponent } from '../input-proprety/input-proprety.component';
@NgModule({
  declarations: [
    DataBindingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPropretyComponent
  ],
  exports:[
    DataBindingComponent
  ]
})
export class DataBindingModule { }
