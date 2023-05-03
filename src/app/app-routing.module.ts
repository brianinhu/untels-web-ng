import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CarrerasComponent } from './componentes/carreras/carreras.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';

const routes: Routes = [
  {path:'lalumnos', component:AlumnosComponent},
  {path:'lcarreras', component:CarrerasComponent},
  {path:'lprofesores', component:ProfesoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
