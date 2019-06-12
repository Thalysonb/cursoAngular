import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { InputPropretyComponent } from './input-proprety/input-proprety.component';
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    InputPropretyComponent,
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
