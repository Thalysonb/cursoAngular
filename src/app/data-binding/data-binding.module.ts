import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DataBindingComponent
  ]
})
export class DataBindingModule { }
