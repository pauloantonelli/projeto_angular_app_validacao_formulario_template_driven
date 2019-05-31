import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

const routes: Routes = [
  { path: 'cliente', component: FormularioClienteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cliente'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
