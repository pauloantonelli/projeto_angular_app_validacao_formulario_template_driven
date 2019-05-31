import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { FormularioClienteComponent } from './formulario-cliente.component';
import { DebugFormModule } from '../debug-form/debug-form.module';
import { ErrorMessageModule } from '../error-message/error-message.module';

@NgModule({
  declarations: [
    FormularioClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DebugFormModule,
    ErrorMessageModule,
    HttpClientModule,
  ],
  exports: [
    FormularioClienteComponent
  ]
})
export class FormularioClienteModule { }
