import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { InputPropretyComponent } from './input-proprety/input-proprety.component';
import { DataBinding2Component } from './data-binding2/data-binding2.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    InputPropretyComponent,
    DataBinding2Component,
    OutputPropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    DataBindingModule,
    FormsModule
  ],
  exports:[
    InputPropretyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
