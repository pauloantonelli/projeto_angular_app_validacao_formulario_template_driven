import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioClienteModule } from './formulario-cliente/formulario-cliente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioClienteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
